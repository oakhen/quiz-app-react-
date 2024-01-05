import { faker } from "@faker-js/faker"

export const questions = [
  {
    id: 1,
    question:
      "1.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, laudantium.",
    answers: [
      {
        text: faker.commerce.productName(),
        correct: false,
      },
      {
        text: faker.commerce.productName(),
        correct: true,
      },
      {
        text: faker.commerce.productName(),
        correct: false,
      },
      {
        text: faker.commerce.productName(),
        correct: false,
      },
    ],
  },
  {
    id: 2,
    question:
      "2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, laudantium.",
    answers: [
      {
        text: faker.commerce.productName(),
        correct: false,
      },
      {
        text: faker.commerce.productName(),
        correct: true,
      },
      {
        text: faker.commerce.productName(),
        correct: false,
      },
      {
        text: faker.commerce.productName(),
        correct: false,
      },
    ],
  },
  {
    id: 3,
    question:
      "3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, laudantium.",
    answers: [
      {
        text: faker.commerce.productName(),
        correct: false,
      },
      {
        text: faker.commerce.productName(),
        correct: true,
      },
      {
        text: faker.commerce.productName(),
        correct: false,
      },
      {
        text: faker.commerce.productName(),
        correct: false,
      },
    ],
  },
  {
    id: 4,
    question:
      "4. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, laudantium.",
    answers: [
      {
        text: faker.commerce.productName(),
        correct: false,
      },
      {
        text: faker.commerce.productName(),
        correct: true,
      },
      {
        text: faker.commerce.productName(),
        correct: false,
      },
      {
        text: faker.commerce.product(),
        correct: false,
      },
    ],
  },
]
