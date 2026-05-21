IMAGE = blog_frontend:dev
CONTAINER = docker_frontend
NETWORK = blog_network 

run:
	docker run -d \
		-p 3000:3000 \
	 	-v $(PWD)/:/app/ \
		-v /app/node_modules \
		-v /app/.next \
		-e DATABASE_URL=postgres://postgres:1000336953@docker_postgres:5432/awesome_db \
		--network $(NETWORK) \
		--name $(CONTAINER) \
		$(IMAGE)

build:
	docker build -t $(IMAGE) .

.PHONY: run build 