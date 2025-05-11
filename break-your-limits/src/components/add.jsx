import React from "react";
import { NavLink, Link } from "react-router-dom";

const diasSemana = [
    { dia: "Lunes" },
    { dia: "Martes" },
    { dia: "Miércoles" },
    { dia: "Jueves" },
    { dia: "Viernes" },
    { dia: "Sábado" },
    { dia: "Domingo" },
];

const Add = () => {
    return (
        <div className="add-container">
            <h2>Selecciona un día para editar la rutina</h2>
            <div className="dias-grid">
                {diasSemana.map(({ dia }) => (
                    <Link to={`/edit/${dia}`} key={dia} className="dia-card">
                        <h3>{dia}</h3>
                        <p>Grupo: {/* Aquí puedes obtener el grupo si ya lo has almacenado o inicializarlo */}</p>
                    </Link>
                ))}
            </div>

            {/* Footer */}
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
                                <img src="/calendario.png" alt="Calendario" />
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
                                <img src="/mas.png" alt="Añadir" />
                            </NavLink>
                        </li>
                        <li>
                            <a href="#">
                                <img src="/usuario.png" alt="Usuario" />
                            </a>
                        </li>
                    </ul>
                </nav>
            </footer>
        </div>
    );
};

export default Add;