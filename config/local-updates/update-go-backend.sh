#!/bin/sh

# navigate to context w/ Dockerfile and build new image
cd ../../go-server
docker-compose down
docker-compose up --build -d

# navigate back and build the image within the minikube docker environment
cd ../config
eval $(minikube docker-env)
docker build -t prometheusdemo/go-server ../go-server

# remove and recreate the pod
kubectl scale deploy go-server --replicas=0
kubectl apply -f go-backend.yaml
kubectl scale deploy go-server --replicas=1
