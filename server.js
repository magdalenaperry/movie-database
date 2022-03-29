const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());

const db = mysql.createConnection({
        // host: 'localhost',
        user: 'root',
        // password: '',
        database: 'movie_db'
    },
    console.log(`Connected to the movie_db database.`)
);

// TODO: Routes go here

// INSERT
app.post('/api/add-movie', (req, res) => {
  db.query('INSERT INTO movies SET ?', req.body, function (err, result) {
    console.log(result);
    res.json(result);
  });
});

// DELETE
app.delete('/api/movie/:id', (req, res) => {
  // req.params.id;
  db.query('DELETE FROM movies WHERE ?', req.params, function (err, result) {
    console.log(result);
    res.json(result);
  });
});

// ADD REVIEW
app.put('/api/update-review', (req, res) => {
  //INSERT INTO reviews SET movie_id = 3, content = "Some text";
  db.query('INSERT INTO reviews SET ?', req.body, function (err, result) {
    console.log(result);
    res.json(result);
  });
});

// GET ALL REVIEWS
app.get('/api/reviews', (req, res) => {
  db.query(`
    SELECT reviews.id, review, names AS movie_name FROM reviews
    LEFT JOIN movies
    ON reviews.movie_id = movies.id
  
  `, function (err, reviews) {
    console.table(reviews);
    res.json(reviews);
  });
});


// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
