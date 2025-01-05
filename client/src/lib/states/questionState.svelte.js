import { browser } from "$app/environment";

const QUESTIONS_KEY = "questions";
let initialQuestions = [];
if (browser && localStorage.hasOwnProperty(QUESTIONS_KEY)) {
  initialQuestions = JSON.parse(localStorage.getItem(QUESTIONS_KEY));
}

let questionState = $state(initialQuestions);

const saveQuestions = () => {
  localStorage.setItem(QUESTIONS_KEY, JSON.stringify(questionState));
};

const useQuestionState = () => {
  return {
    get questions() {
      return questionState;
    },
    add: (question) => {
        if (question.upvotes == undefined) {
          question.upvotes = 0;
        }
        questionState.push(question);
        saveQuestions();
    },
    delete: (id) => {
        questionState = questionState.filter((question) => question.id !== id);
        saveQuestions();
    },
    upvote: (id) => {
        const question = questionState.find((question) => question.id === id);
        question.upvotes = Number(question.upvotes) + 1;
        saveQuestions();
    },
  };
};

export { useQuestionState };