import React from 'react';
import { Link } from 'react-router-dom';

export const HomeCtaBanner = () => {
  return (
    <section className="py-5 bg-dark text-white text-center">
      <div className="container py-4" style={{ border: '1px solid brown' }}>
        <h2 className="fw-bold mb-3">¿Coordinas o lideras un grupo actualmente?</h2>
        <p className="text-light opacity-75 mx-auto mb-4" style={{ maxWidth: '600px' }}>
          Podemos ayudarte a definir la mejor dinámica de facilitación o acompañarte 
          en el momento de transición que están viviendo.
        </p>
        <Link to="/contacto" className="btn btn-primary btn-lg px-4">
          Hablemos sobre tu comunidad
        </Link>
      </div>
    </section>
  );
};