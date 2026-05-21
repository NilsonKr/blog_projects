IMAGE = blog_api:dev
CONTAINER = docker_api
NETWORK = blog_network 

run:
	docker run -d \
		-p 8000:80 \
		-e DATABASE_URL=postgresql+psycopg://postgres:1000336953@docker_postgres:5432/awesome_db \
		-e DEBUG=true \
		-v $(PWD)/:/app/ \
		--network $(NETWORK) \
		--name $(CONTAINER) \
		$(IMAGE)

build:
	docker build --target dev -t $(IMAGE) .

.PHONY: run build