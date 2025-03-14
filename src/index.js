import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { useState } from "react";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const style = { color: "red", fontSize: "48px", textTransform: "uppercase" }
  const style = {};

  return (
    <header className="header">
      <h1 style={style}>Mujnuu Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <div className="pizzas">
        {pizzaData.map((pizza) => {
          return (
            <Pizza
              name={pizza.name}
              ingredients={pizza.ingredients}
              photoName={pizza.photoName}
              price={pizza.price}
              soldOut={pizza.soldOut}
            />
          );
        })}
      </div>
    </main>
  );
}

function Pizza(props) {
  // name: "Pizza Spinaci",
  //   ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
  //   price: 12,
  //   photoName: "pizzas/spinaci.jpg",
  //   soldOut: false,

  return (
    <div className="pizza">
      <img src={props.photoName} alt="Pizza Spinaci" />
      <div>
        <h3>{props.name}</h3>
        <p>
          <strong>Ingredients:</strong> {props.ingredients}
        </p>
        <p>
          <strong>Price:</strong> Rs. {props.price}00
        </p>
      </div>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);

  return (
    <footer>
      {time}. We're currently {isOpen ? "open" : "closed"}.
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
