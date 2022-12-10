start: stop
	docker compose build
	docker compose up -d --no-build --remove-orphans

stop:
	docker compose stop

watch-logs:
	docker compose logs -f

lint:
	docker exec -it server sh -c "deno lint"

format:
	docker exec -it server sh -c "deno fmt"
