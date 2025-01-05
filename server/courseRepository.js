import postgres from "postgres";

const sql = postgres();

const readCourses = async () => {
  return await sql`SELECT * FROM courses`;
};

const readCourse = async (id) => {
  const result = await sql`SELECT * FROM courses WHERE id = ${id}`;
  return result[0];
};

const createCourse = async (course) => {
  const result = await sql`INSERT INTO courses (name)
    VALUES (${course.name})
    RETURNING *`;
  return result[0];
};

const removeCourse = async (id) => {
  const result = await sql`DELETE FROM courses WHERE id = ${id} RETURNING *`;
  return result[0];
};

const readQuestions = async (course_id) => {
    return await sql`SELECT * FROM questions WHERE course_id = ${course_id}`;
};

const createQuestion = async (course_id, question) => {
    const result = await sql`INSERT INTO questions (course_id, title, text, upvotes)
      VALUES (${course_id}, ${question.title}, ${question.text}, 0)
      RETURNING *`;
    return result[0];
};

const upvoteQuestion = async (course_id, question_id) => {
    const result = await sql`UPDATE questions
        SET upvotes = upvotes + 1
        WHERE id = ${question_id} AND course_id = ${course_id}
        RETURNING *`;
  return result[0];
};

const removeQuestion = async (course_id, question_id) => {
    const result = await sql`DELETE FROM questions
        WHERE id = ${question_id} AND course_id = ${course_id}
        RETURNING *`;
    return result[0];
};

export { readCourses, readCourse, createCourse, removeCourse, readQuestions, createQuestion, upvoteQuestion, removeQuestion };