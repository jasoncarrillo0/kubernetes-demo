package main

import (
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"server/db"
	"server/helpers"

	"github.com/gorilla/mux"
	"github.com/joho/godotenv"
)

func main() {

	// load .env file if developing locally
	var host = os.Getenv("KUBERNETES_SERVICE_HOST")
	fmt.Println("K8s host name?: " + host)
	if len(host) == 0 {
		err0 := godotenv.Load()
		if err0 != nil {
			panic(err0)
		}
	}

	var DB, err = db.Initialize("items")
	if err != nil {
		fmt.Println("error initializing the db.")
		panic(err)
	}
	fmt.Println("\ndb connection successful.")

	r := mux.NewRouter()

	r.HandleFunc("/largeload", func(w http.ResponseWriter, r *http.Request) {

		body, err := ioutil.ReadAll(r.Body)
		if err != nil {
			log.Fatal(err)
		}

		// write data to postgres db
		person := string(body)
		helpers.AddRequest(DB, person)
		fmt.Println("finished attempt.")
		fmt.Fprintf(w, "received hit from java-server: large load body")
	})

	r.HandleFunc("/mediumload", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "received hit from java-server: medium load body")
	})

	http.ListenAndServe(":80", r)
}
