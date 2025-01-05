import { Hono } from "@hono/hono";
import { cors } from "@hono/hono/cors";

import * as courseController from "./courseController.js";

const app = new Hono();
app.use("/*", cors());

app.get("/api/courses", courseController.getCourses);
app.get("/api/courses/:id", courseController.getCourse);
app.post("/api/courses", ...courseController.createCourse);
app.delete("/api/courses/:id", courseController.deleteCourse);

app.get("/api/courses/:id/questions", courseController.getQuestions);
app.post("/api/courses/:id/questions", ...courseController.createQuestion);
app.post("/api/courses/:id/questions/:qId/upvote", courseController.upvoteQuestion);
app.delete("/api/courses/:id/questions/:qId", courseController.deleteQuestion);

export default app;