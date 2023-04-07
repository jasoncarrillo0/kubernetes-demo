#!/bin/sh
docker build -t prometheusdemo/frontend .
docker stop react-frontend 
docker rm react-frontend
docker run --name react-frontend -d --network="backend-services" -p 3000:3000 prometheusdemo/frontend