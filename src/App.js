import React from "react";
import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

function App() {
  return React.createElement(
    "div",
    { class: "container" },
    React.createElement("h1", { class: "title" }, "Padre Gino's Pizzas"),
    React.createElement(Pizza, {
      name: "Margherita",
      description: "Tomato, mozzarella, and basil",
    }),
    React.createElement(Pizza, {
      name: "Pepperoni",
      description: "Tomato, mozzarella, and pepperoni",
    }),
    React.createElement(Pizza, {
      name: "Hawaiian",
      description: "Tomato, mozzarella, ham, and pineapple",
    }),
  );
}

const rootContainer = document.getElementById("root");
const root = createRoot(rootContainer);
root.render(React.createElement(App));
