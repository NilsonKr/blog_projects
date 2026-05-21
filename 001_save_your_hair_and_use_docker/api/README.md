# Docker CLI commands

## Build images

```bash
## Build API docker image
docker build --target dev -t api:dev

## Pull Postgres Docker image depending on version
docker pull postgres:[version]     #In my case 18.4-alpine3.23 or latest
```

## Run containers

- ### Run API container

```bash
docker run \
--name docker_api \ # Container name
-d \ # Run in background
-p 8000:80 \ # Exposed ports
-v ./:/app/ \ # Link a volume to local folder for development
--network project_network \ # Network where container could communicate
api:dev # Image that container is build from
```

- ### Run Postgres container

```bash
docker run \
-d \                                            #  run container in the background
  --restart unless-stopped \                    # always restart unless manually stopped
  --name docker_postgres \                      # container's name
  -e POSTGRES_PASSWORD=1000336953 \             # superuser password for the 'postgres' default user
  -e POSTGRES_DB=awesome_db \                   # name of the default database to create on init i.e. your database name
  --network blog_network \                      # Attach container to the 'blog_network' Docker network
  -v blog_docker_postgres:/var/lib/postgresql/ \  # Mount named volume for persistent data storage NOTE: if below 18 version you should link it to /var/lib/postgresql/data
  postgres:18.4-alpine3.23                      # The postgres image we just pulled
```

## Create corresponding network and volume

```bash
## Create the project network
docker network create project_network
## Then verify it with
docker network ls # or docker network inspect [network_name]

## Create the volume to persist postgres data
docker volume create docker_postgres_data
## Then verify it with
docker volume ls # or docker volume inspect [volume_name]
```

## Execute bash commands inside docker containers

```bash
docker exec -it [container_name] /bin/bash

## It should prompt a bash

# randomContainerId:/# proceed to execute your commands here or 'exit' to get out.
```
