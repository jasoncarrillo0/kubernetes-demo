#!/bin/sh
./mvnw install
docker build -t prometheusdemo/java-server .
docker stop java-server 
docker rm java-server
docker run --name java-server --network="backend-services" -d -p 8080:8080 prometheusdemo/java-server 
