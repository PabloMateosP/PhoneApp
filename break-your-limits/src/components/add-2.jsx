import React, { useState, useEffect } from "react";
import { db } from "../firebase"; // Asegúrate de que el archivo firebase.js esté bien importado
import { collection, getDocs } from "firebase/firestore";
import { Routes, Route, NavLink } from "react-router-dom";

const Add = () => {
  const [exercises, setExercises] = useState([]);

  // Obtener ejercicios de Firebase
  const fetchExercises = async () => {
    const exercisesCollection = collection(db, "ejercicios"); // Asegúrate de que el nombre de la colección sea correcto
    const exercisesSnapshot = await getDocs(exercisesCollection);
    const exercisesList = exercisesSnapshot.docs.map((doc) => doc.data());
    setExercises(exercisesList);
  };

  useEffect(() => {
    fetchExercises(); // Llamamos a la función al cargar el componente
  }, []);

  return (
    <div>
      {/* Contenedor de tarjetas */}
      <div className="add-container">
        {exercises.length > 0 ? (
          exercises.map((exercise, index) => (
            <div key={index} className="add-card">
              <img
                src={exercise.image}
                alt={exercise.name}
                className="add-card-img"
              />
              <div className="add-card-content">
                <h2>{exercise.name}</h2>
                <p>{exercise.description}</p>
                <p>
                  <strong>Músculos implicados:</strong>{" "}
                  {Array.isArray(exercise.muscles)
                    ? exercise.muscles.join(", ")
                    : exercise.muscles}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>No hay ejercicios disponibles.</p>
        )}
      </div>

      <footer>
        <nav>
          <ul>
            <li>
              <a href="#">
                <img src="/mancuerna.png" alt="Mancuerna" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/calendario.png" alt="Calendar" />
              </a>
            </li>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <img src="/casa.png" alt="Home" />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/add"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <img src="/mas.png" alt="More" />
              </NavLink>
            </li>
            <li>
              <a href="#">
                <img src="/usuario.png" alt="User" />
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
};

export default Add;
