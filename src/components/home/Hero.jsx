import React from 'react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <section className="hero-section text-center py-5">
      <div className="container py-4">
        <span className="badge rounded-pill bg-light text-primary px-3 py-2 mb-3 border">
          Facilitación & Desarrollo Comunitario
        </span>
        <h1 className="display-5 fw-bold text-dark mb-3">
          Hacer comunidad es un proceso vivo,<br className="d-none d-md-inline" /> no una casualidad.
        </h1>
        <p className="lead text-muted mx-auto mb-4" style={{ maxWidth: '680px' }}>
          Acompañamos a facilitadores, coordinadores y líderes a comprender y cuidar cada etapa 
          del ciclo de vida de sus grupos para construir espacios sostenibles y colaborativos.
        </p>
        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <a href="#ciclo-de-vida" className="btn btn-primary btn-lg px-4 shadow-sm">
            Explorar las 4 fases
          </a>
          <Link to="/contacto" className="btn btn-outline-secondary btn-lg px-4">
            Conversemos
          </Link>
        </div>
      </div>
    </section>
  );
};