import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";

const Home = () => (
  <div>
    <main>
      <div className="container-stats"></div>
    </main>

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

export default Home;
