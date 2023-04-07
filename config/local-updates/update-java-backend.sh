#!/bin/sh

# navigate to context w/ Dockerfile and build new image
cd ../java-server/complete
./mvnw install
docker build -t prometheusdemo/java-server .

# navigate back and build the image within the minikube docker environment
cd ../../config
eval $(minikube docker-env)
docker build -t prometheusdemo/java-server ../java-server/complete

# remove and recreate the pod
kubectl scale deploy java-server --replicas=0
kubectl apply -f java-backend.yaml
kubectl scale deploy java-server --replicas=1


