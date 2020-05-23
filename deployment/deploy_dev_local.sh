#!/usr/bin/bash

lerna bootstrap && \
PRISMA_URL=http://localhost:4466 lerna run build && \
sudo docker-compose --file deployment/docker-compose-prisma-only.yml up -d --build
# TODO: wait-for-it until hasura is up and then migrate?