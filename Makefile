PROJECT = $(shell basename $(shell pwd))
ID = rfm/${PROJECT}

build:
	podman build \
		--build-arg PROJECT=${PROJECT} \
		--tag ${ID} .

run:
	podman run \
		--name ${PROJECT} \
		--hostname ${PROJECT} \
		--volume $(shell pwd):/opt/${PROJECT} \
		--interactive \
		--tty \
		--rm \
		--publish 3002:3002 \
		${ID} \
		bash

exec:
	podman exec \
		--interactive \
		--tty \
		${PROJECT} \
		bash
