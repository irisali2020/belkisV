import React from 'react';
import { cycleStages } from '../../data/homeData';
import { StageCard } from './StageCard';

export const CycleStages = () => {
  return (
    <section id="ciclo-de-vida" className="py-5 bg-light">
      <div className="container py-4">
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-2">Las 4 fases del ciclo grupal</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
            Cada momento exige un tipo distinto de escucha, acuerdos y herramientas. 
            Identifica dónde está tu comunidad hoy.
          </p>
        </div>

        <div className="row g-4">
          {cycleStages.map((stage) => (
            <StageCard key={stage.id} stage={stage} />
          ))}
        </div>
      </div>
    </section>
  );
};