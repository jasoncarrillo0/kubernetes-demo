package helpers

import (
	"database/sql"
	"fmt"
)

func AddRequest(db *sql.DB, person string) error {
	fmt.Println("attempting to insert" + person + "into db....")
	query := `INSERT INTO requests (data) VALUES ($1) RETURNING id, ts;`
	_, err := db.Exec(query, person)

	if err != nil {
		panic(err)
	}
	return nil
}
