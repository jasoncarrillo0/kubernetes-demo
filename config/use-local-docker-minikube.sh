#!/bin/sh

# one time script to run everything

eval $(minikube docker-env)
docker build -t prometheusdemo/go-server ../go-server
docker build -t prometheusdemo/java-server ../java-server/complete
docker build -t prometheusdemo/frontend ../frontend

# open new terminal with minikube tunnel
osascript -e 'tell application "Terminal" to do script "minikube tunnel"'
sleep 10


kubectl apply -f postgres-db.yaml
kubectl apply -f react-frontend.yaml
sleep 10
kubectl apply -f java-backend.yaml
kubectl apply -f go-backend.yaml
sleep 5

# log result
kubectl get svc