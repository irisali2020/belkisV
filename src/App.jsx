import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Layout global
import { Header } from './components/layout/Header';
import { Navbar } from './components/layout/Navbar';
// import { Footer } from './components/layout/Footer';

// Páginas de la SPA
import { Home } from './pages/Home/Home';
import { Comunidades } from './pages/Comunidades/Comunidades';
import { Recursos } from './pages/Recursos/Recursos';
import { Servicios } from './pages/Servicios/Servicios';
// import { Blog } from './pages/Blog/Blog';
// import { Contacto } from './pages/Contacto/Contacto';

function App() {
  return (
    <BrowserRouter>

     {/* 1. Encabezado de marca e identidad */}
      <Header />
    
      {/* Navbar persistente en todas las vistas */}
      <Navbar />

      {/* Contenedor dinámico según la ruta */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comunidades" element={<Comunidades />} />
        <Route path="/recursos" element={<Recursos />} />
        <Route path="/servicios" element={<Servicios />} />
        {/* <Route path="/blog" element={<Blog />} />
        <Route path="/contacto" element={<Contacto />} /> */}
        
        {/* Ruta de respaldo para páginas no encontradas */}
        <Route path="*" element={<Home />} />
      </Routes>

      {/* Footer persistente en todas las vistas */}
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;