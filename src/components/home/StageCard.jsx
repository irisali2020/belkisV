import React from 'react';
import { Link } from 'react-router-dom';

export const StageCard = ({ stage }) => {
  return (
    <div className="col-12 col-md-6 col-lg-3 d-flex">
      <div className="card h-100 border-0 shadow-sm rounded-4 w-100 p-3 position-relative">
        <div className="card-body d-flex flex-column">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <span 
              className="fw-bold fs-4" 
              style={{ color: stage.colorAccent }}
            >
              {stage.number}
            </span>
            <span className="small text-uppercase text-muted fw-semibold">
              {stage.subtitle}
            </span>
          </div>

          <h3 className="h5 fw-bold text-dark mb-3">{stage.title}</h3>
          
          <div className="mb-3">
            <p className="small text-muted mb-1"><strong>El desafío:</strong></p>
            <p className="small text-secondary mb-0">{stage.challenge}</p>
          </div>

          <div className="mb-4">
            <p className="small text-muted mb-1"><strong>Enfoque clave:</strong></p>
            <p className="small text-secondary mb-0">{stage.solution}</p>
          </div>

          <div className="mt-auto pt-2 border-top">
            <Link 
              to={`/recursos?fase=${stage.id}`} 
              className="small fw-semibold text-decoration-none"
              style={{ color: stage.colorAccent }}
            >
              Ver recursos →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};