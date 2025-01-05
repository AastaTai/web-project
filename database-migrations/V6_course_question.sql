CREATE TABLE courses (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE questions (
  id SERIAL PRIMARY KEY,
  course_id INTEGER REFERENCES courses(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  text TEXT NOT NULL,
  upvotes INTEGER NOT NULL DEFAULT 0
);

-- curl -X POST -H "Content-Type: application/json" -d '{"name":"aaaa"}' http://localhost:8000/api/courses
-- curl -X POST -H "Content-Type: application/json" -d '{"name":"bbbb"}' http://localhost:8000/api/courses
-- curl -X POST -H "Content-Type: application/json" -d '{"name":"cccc"}' http://localhost:8000/api/courses
-- curl -X GET http://localhost:8000/api/courses
-- curl -X GET http://localhost:8000/api/courses/2
-- curl -X DELETE http://localhost:8000/api/courses/3
-- curl -X POST -H "Content-Type: application/json" -d '{"title": "first try", "text": "text......"}' http://localhost:8000/api/courses/1/questions
-- curl -X POST -H "Content-Type: application/json" -d '{"title": "second try", "text": "texttttt"}' http://localhost:8000/api/courses/1/questions
-- curl -X POST -H "Content-Type: application/json" -d '{"title": "third try", "text": "textttttttt"}' http://localhost:8000/api/courses/2/questions
-- curl -X POST -H "Content-Type: application/json" -d '{"title": "forth try", "text": "ttttttt"}' http://localhost:8000/api/courses/1/questions
-- curl -X GET http://localhost:8000/api/courses/1/questions
-- curl -X POST http://localhost:8000/api/courses/1/questions/1/upvote
-- curl -X DELETE http://localhost:8000/api/courses/1/questions/4

