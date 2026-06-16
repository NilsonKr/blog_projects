# Running compose for prod images

cd /Users/nilsondiazperez/Coding/personal/blog/001_save_your_hair_and_use_docker

# 0. Secrets

cp .env.prod.example .env.prod # then edit POSTGRES_PASSWORD

# 1. Bring up Postgres + API (creates the network, waits for db healthy)

docker compose -f docker-compose.prod.yaml --env-file .env.prod up -d --build db api

# 2. Create the `subject` table (frontend build SELECTs from it).

# The prod api image excludes alembic/ + alembic.ini, so mount the source for this one-off:

docker compose -f docker-compose.prod.yaml --env-file .env.prod \
 run --rm -v "$(pwd)/api:/app" api alembic upgrade head

# 3. Build the frontend — now `db` is up & migrated, and the build joins the network

docker compose -f docker-compose.prod.yaml --env-file .env.prod build frontend

# 4. Start the frontend

docker compose -f docker-compose.prod.yaml --env-file .env.prod up -d frontend

Verify: docker compose -f docker-compose.prod.yaml --env-file .env.prod ps → app on localhost:3000,
API on localhost:8000.

Things worth knowing

- The network name must match. build.network takes the real docker network name, so it's set to
  blog_network_prod (the name: under networks:), not the compose service-key blog_network.
- Re-deploys: after the first run the DB stays up, so subsequent deploys are just steps 3–4 (rerun
  step 2 only when you add migrations).
- Two caveats to flag, not blockers:
  - Passing DATABASE_URL as a build ARG bakes the password into the frontend image layers. Fine for
    a personal blog; if you care, switch to a BuildKit --mount=type=secret.
  - LobbyChat.tsx hardcodes ws://localhost:8000/lobby/ws. That's a client-side URL (browser →
    host), so it works in prod only as long as the API is reachable at localhost:8000 from the browser.
    Worth parameterizing later via NEXT*PUBLIC*\*.
