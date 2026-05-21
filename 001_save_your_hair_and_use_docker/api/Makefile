DEFAULT_DB = postgres
DATABASE_USER = nilsondiazperez
DATABASE_NAME = awesome_db

initialize_database:
	psql -U $(DATABASE_USER) -d $(DEFAULT_DB) -c "CREATE DATABASE $(DATABASE_NAME) WITH OWNER $(DATABASE_USER);"

check_database:
	pg_isready -U $(DATABASE_USER) -d $(DATABASE_NAME)

run_migrations:
	alembic upgrade head 

check_migrations:
	psql -U $(DATABASE_USER) -d $(DATABASE_NAME) -c "\dt" && psql -U $(DATABASE_USER) -d $(DATABASE_NAME) -c "select * from subject;"


.PHONY: initialize_database check_database make_migration run_migrations