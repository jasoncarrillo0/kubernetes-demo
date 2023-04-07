package db

import (
	"database/sql"
	"fmt"
	"os"

	_ "github.com/lib/pq"
	log "github.com/sirupsen/logrus"
)

// ErrNoMatch is returned when we request a row that doesn't exist
var ErrNoMatch = fmt.Errorf("no matching record")

// const projectDirName = "."

// // LoadEnv loads env vars from .env
// func LoadEnv() {
// 	re := regexp.MustCompile(`^(.*` + projectDirName + `)`)
// 	cwd, _ := os.Getwd()
// 	rootPath := re.Find([]byte(cwd))

// 	err := godotenv.Load(string(rootPath) + `/.env`)
// 	if err != nil {
// 		log.WithFields(log.Fields{
// 			"cause": err,
// 			"cwd":   cwd,
// 		}).Fatal("Problem loading .env file")

// 		os.Exit(-1)
// 	}
// }

// the env vars should be set from the k8s pod's config map/volume mount
func Initialize(database string) (*sql.DB, error) {
	var host = os.Getenv("HOST")
	var db_port = os.Getenv("DB_PORT")
	var user = os.Getenv("USER")
	var password = os.Getenv("PASSWORD")
	var db_name = os.Getenv("DB_NAME")
	fmt.Println("host: " + host)
	fmt.Println("db_port: " + db_port)
	fmt.Println("user: " + user)
	fmt.Println("password: " + password)
	fmt.Println("db_name: " + db_name)

	dsn := fmt.Sprintf(
		"host=%s port=%s user=%s password=%s dbname=%s sslmode=disable",
		os.Getenv("HOST"),
		os.Getenv("DB_PORT"),
		os.Getenv("USER"),
		os.Getenv("PASSWORD"),
		os.Getenv("DB_NAME"),
	)
	db, err := sql.Open("postgres", dsn)
	if err != nil {
		return db, err
	}

	err = db.Ping()
	if err != nil {
		return db, err
	}
	log.Println("Database connection established")
	return db, nil
}
