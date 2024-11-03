// // Example function for validating email format
// export const validateEmail = (email: string): boolean => {
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return emailRegex.test(email);
// };

// // Example function for validating a password
// export const validatePassword = (password: string): boolean => {
//   return password.length >= 8; // Password should be at least 8 characters long
// };


import { Question } from '../types/interfaces';

export function validateQuestions(questions: Question[]) {
  questions.forEach((question) => {
    // Extract `correct_answer` and `correct_answers` from the question
    const { correct_answer, correct_answers } = question;

    // Ensure correct_answers has the correct structure
    const answerKeys: Array<keyof typeof correct_answers> = [
      'answer_a_correct',
      'answer_b_correct',
      'answer_c_correct',
      'answer_d_correct',
      'answer_e_correct',
      'answer_f_correct'
    ];

    // Find the key in `correct_answers` that is marked as true
    const correctAnswerKey = answerKeys.find((key) => correct_answers[key] === "true");

    // Construct the corresponding key to compare with correct_answer
    const expectedAnswerKey = correct_answer + "_correct"; // e.g., "answer_a_correct"

    // Validate if the correct_answer corresponds to the correct_answers entry
    if (correctAnswerKey && correct_answers[expectedAnswerKey as keyof typeof correct_answers] !== "true") {
      console.warn(
        `Mismatch in question ID ${question.id}:`,
        `correct_answer is ${correct_answer}, but ${correctAnswerKey} is marked true in correct_answers`
      );
    }
  });
}
