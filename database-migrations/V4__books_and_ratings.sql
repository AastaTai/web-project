CREATE TABLE books (
  id SERIAL PRIMARY KEY,
  title TEXT,
  year INT
);

CREATE TABLE book_ratings (
  id SERIAL PRIMARY KEY,
  book_id INTEGER NOT NULL REFERENCES books(id),
  rating INTEGER NOT NULL,
  feedback TEXT
);

ALTER TABLE book_ratings ADD CONSTRAINT rating_range CHECK (rating >= 1 AND rating <= 5);