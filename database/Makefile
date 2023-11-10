all: up

up:
	docker-compose -f ./srcs/docker-compose.yml up -d

down:
	docker-compose -f ./srcs/docker-compose.yml down

start:
	docker-compose -f ./srcs/docker-compose.yml start

stop:
	docker-compose -f ./srcs/docker-compose.yml stop

restart:
	docker-compose -f ./srcs/docker-compose.yml restart

build:
	docker-compose -f ./srcs/docker-compose.yml build

status:
	docker-compose -f ./srcs/docker-compose.yml status

logs:
	docker-compose -f ./srcs/docker-compose.yml logs

clean:
	docker system prune -f -a --volumes