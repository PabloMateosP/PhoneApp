// src/components/Setup.jsx
import React, { useState } from "react";

const Setup = ({ onComplete }) => {
  const [name, setName] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [goal, setGoal] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { name, weight, height, goal };

    localStorage.setItem("userData", JSON.stringify(userData));
    localStorage.setItem("onboardingCompleted", "true");
    onComplete(); // esto lleva a Home
  };

  return (
    <div className="setup-container">
      <h2>Bienvenido a tu Gym App</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Tu nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Peso (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Altura (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Meta (ej. bajar de peso, ganar masa...)"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
        />
        <button type="submit">Empezar</button>
      </form>
    </div>
  );
};

export default Setup;