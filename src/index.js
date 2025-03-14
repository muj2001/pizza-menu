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
  if (pizzaData.length > 0) {
    return (
      <main className="menu">
        <h2>Our Menu</h2>
        <p>
          Authentic Italian cuisine. {pizzaData.length} creative dishes to
          choose from. All from our stone oven, all organic, all delicious.
        </p>
        <div className="pizzas">
          {pizzaData.map((pizza) => {
            return (
              <Pizza
                pizzaObject={pizza}
                // name={pizza.name}
                // ingredients={pizza.ingredients}
                // photoName={pizza.photoName}
                // price={pizza.price}
                // soldOut={pizza.soldOut}
                key={pizza.name}
              />
            );
          })}
        </div>
      </main>
    );
  } else {
    return (
      <main className="menu">
        <h2>No Pizzas Available</h2>
      </main>
    );
  }
}

function Pizza({ pizzaObject, key }) {
  // name: "Pizza Spinaci",
  //   ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
  //   price: 12,
  //   photoName: "pizzas/spinaci.jpg",
  //   soldOut: false,
  return (
    <div className="pizza">
      <img
        style={{ filter: `${pizzaObject.soldOut ? "grayscale(1)" : ""}` }}
        src={pizzaObject.photoName}
        alt="Pizza Spinaci"
      />
      <div>
        <h3>{pizzaObject.name}</h3>
        <p>
          <strong>Ingredients:</strong> {pizzaObject.ingredients}
        </p>
        <p>
          {pizzaObject.soldOut ? (
            "Sold Out"
          ) : (
            <span>
              <strong>Price:</strong>
              {` Rs. ${pizzaObject.price}00`}
            </span>
          )}
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
    <footer className="order">
      {time}. We're currently {isOpen ? "open" : "closed"}.
      {isOpen && <button className="btn">Order</button>}
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
