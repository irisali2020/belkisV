import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-primary-custom py-2 shadow-sm sticky-top">
      <div className="container d-flex align-items-center justify-content-between">
        
        {/* Lista de enlaces: d-flex flex-row asegura que queden en línea siempre */}
        <ul className="navbar-nav d-flex flex-row align-items-center gap-2 gap-md-4 mb-0 list-unstyled">
          <li className="nav-item">
            <NavLink 
              to="/" 
              end
              className={({ isActive }) => 
                `nav-link px-2 py-1 text-white ${isActive ? 'fw-bold border-bottom border-2 border-white' : 'opacity-75'}`
              }
            >
              Inicio
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/comunidades" 
              className={({ isActive }) => 
                `nav-link px-2 py-1 text-white ${isActive ? 'fw-bold border-bottom border-2 border-white' : 'opacity-75'}`
              }
            >
              Comunidades
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/recursos" 
              className={({ isActive }) => 
                `nav-link px-2 py-1 text-white ${isActive ? 'fw-bold border-bottom border-2 border-white' : 'opacity-75'}`
              }
            >
              Recursos
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/servicios" 
              className={({ isActive }) => 
                `nav-link px-2 py-1 text-white ${isActive ? 'fw-bold border-bottom border-2 border-white' : 'opacity-75'}`
              }
            >
              Servicios
            </NavLink>
          </li>
        </ul>

        {/* Botón de acción contrastado */}
        <div>
          <Link 
            to="/servicios" 
            className="btn btn-light btn-sm fw-semibold text-primary px-3 shadow-sm"
          >
            Comenzar
          </Link>
        </div>

      </div>
    </nav>
  );
};