IMAGE = blog_db:dev
CONTAINER = docker_postgres
NETWORK = blog_network 

run_db:
	docker run -d \
		-p 5433:5432 \
		-e POSTGRES_PASSWORD=1000336953 \
		-e POSTGRES_DB=awesome_db \
		-v blog_docker_postgres:/var/lib/postgresql/ \
		--network $(NETWORK) \
		--name $(CONTAINER) \
		$(IMAGE)

build_db:
	docker build -t $(IMAGE) .

build_compose:
	docker compose build

run_compose:
	docker compose up

down_compose:
	docker compose down

.PHONY: run_db build_db build_compose run_compose down_compose