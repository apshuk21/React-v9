import React from "react";
import { createRoot } from "react-dom/client";

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

function Pizza(props) {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
}

const rootContainer = document.getElementById("root");
const root = createRoot(rootContainer);
root.render(React.createElement(App));
