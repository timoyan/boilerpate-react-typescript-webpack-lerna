## How to create base docker image

Switch to the working directory then execute following script

`docker build -f ./docker/base.yaml -t base .`

## How to build docker image

Just launch the command tool and switch to the working directory then execute following script

`docker build -t app-from-node .`

## How to run container

`docker run -p 3000:80 -d app-from-base`

## How to connect container via bash

`docker exec -it <container_id> bash`

<!-- docker build -t app-from-base . -->
