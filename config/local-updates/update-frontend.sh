#!/bin/sh
cd ../../frontend
docker build -t prometheusdemo/frontend .
cd ../config
eval $(minikube docker-env)
docker build -t prometheusdemo/frontend ../frontend

kubectl scale deploy react-app-deployment --replicas=0
kubectl apply -f react-frontend.yaml
kubectl scale deploy react-app-deployment --replicas=1
