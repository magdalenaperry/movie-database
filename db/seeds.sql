USE movie_db;
INSERT INTO movies(names)
VALUES
('Grease'),
('Breakfast at Tiffanys'),
('American Psycho'),
('Star Wars: Episode One');

INSERT INTO reviews(movie_id, review)
VALUES
(1, 'This is a wonderful movie.'),
(1, 'Awesome Cast!'),
(2, 'This movie is great!'),
(3, 'This movie is fun.'),
(3, 'Ahead of its time!'),
(4, 'This is my favorite movie.');
