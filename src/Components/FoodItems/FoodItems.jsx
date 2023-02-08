import { Fragment } from "react";

import { useState } from "react";
let DummyData = [
  {
    name: "BIRYANI",
    rating: 4.6,
    price: 10,
    image: "butterChicken.jpeg",
  },
  {
    name: "BUTTERCHICKEN",
    rating: 4.7,
    price: 22,
    image: "biryani.jpeg",
  },
  {
    name: "BURGER",
    rating: 4.8,
    price: 23,
    image: "burger.jpeg",
  },
  {
    name: "PIZZA",
    rating: 4.9,
    price: 33,
    image: "pizza.jpeg",
  },
  {
    name: "CHATPATE",
    rating: 4.2,
    price: 35,
    image: "chatpate.webp",
  },
  {
    name: "SANDWICH",
    rating: 4.2,
    price: 35,
    image: "sandwich.jpeg",
  },
  {
    name: "SALAD",
    rating: 4.2,
    price: 35,
    image: "salad.jpeg",
  },
  {
    name: "THAI CHICKEN",
    rating: 4.2,
    price: 35,
    image: "chatpate.webp",
  },
  {
    name: "RAYMIN NOODLES",
    rating: 4.2,
    price: 35,
    image: "noodles.jpeg",
  },
  {
    name: "TURKISH FRIED RICE",
    rating: 4.2,
    price: 35,
    image: "friedRice.jpeg",
  },
  {
    name: "CHINESE CURRY",
    rating: 4.2,
    price: 35,
    image: "thai.webp",
  },
];

const FoodItems = (props) => {
  return DummyData;
};
export default DummyData;
