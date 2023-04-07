# syntax=docker/dockerfile:1

##
## STEP 1 - BUILD
##

# specify the base image to  be used for the application, alpine or ubuntu
FROM golang:1.17-alpine AS build

# create a working directory inside the image
WORKDIR /app

COPY . /app

# compile application
RUN go build -o /go-server



##
## STEP 2 - DEPLOY
##
FROM alpine:3

WORKDIR /

COPY --from=build /go-server /go-server
EXPOSE 8081
CMD [ "/go-server" ]