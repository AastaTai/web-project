import { zValidator } from "zValidator";

import * as courseRepository from "./courseRepository.js";
import { courseValidator, questionValidator } from "./validators.js";

const getCourses = async (c) => {
    return c.json(await courseRepository.readCourses());
};

const getCourse = async (c) => {
    const id = c.req.param("id");
    return c.json(await courseRepository.readCourse(id));
};

const createCourse = [zValidator("json", courseValidator), async (c) => {
    const course = await c.req.valid("json");
    return c.json(await courseRepository.createCourse(course));
}];

const deleteCourse = async (c) => {
    const id = c.req.param("id");
    return c.json(await courseRepository.removeCourse(id));
};

const getQuestions = async (c) => {
    const course_id = c.req.param("id");
    return c.json(await courseRepository.readQuestions(course_id));
}

const createQuestion = [zValidator("json", questionValidator), async (c) => {
    const id = c.req.param("id");
    const question = await c.req.valid("json");
    return c.json(await courseRepository.createQuestion(id, question));
}];

const upvoteQuestion = async (c) => {
    const id = c.req.param("id");
    const qId = c.req.param("qId");
    return c.json(await courseRepository.upvoteQuestion(id, qId));
};

const deleteQuestion = async (c) => {
    const id = c.req.param("id");
    const qId = c.req.param("qId");
    return c.json(await courseRepository.removeQuestion(id, qId));
};

export { getCourses, getCourse, createCourse, deleteCourse, getQuestions, createQuestion, upvoteQuestion, deleteQuestion };