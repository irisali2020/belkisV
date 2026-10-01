import React from 'react';
import { environments } from '../../data/homeData';

export const Environments = () => {
  return (
    <section className="py-5">
      <div className="container py-4">
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-2">Espacios donde cobra vida</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
            Diseñado para aplicarse en cualquier contexto donde las personas se unan 
            por un propósito común.
          </p>
        </div>

        <div className="row g-4">
          {environments.map((item) => (
            <div key={item.id} className="col-12 col-md-6 col-lg-3">
              <div className="p-4 border rounded-3 h-100 bg-white shadow-none hover-shadow">
                <h4 className="h6 fw-bold text-dark mb-2">{item.title}</h4>
                <p className="small text-muted mb-0">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};