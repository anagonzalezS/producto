import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './components/ProductList.jsx'; // Asegúrate de que la ruta sea correcta

function App() {
  return (
    <div className="App">
      {/* Barra de navegación */}
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <span className="navbar-brand mb-0 h1">Mi Tienda </span>
        </div>
      </nav>

      {/* Contenido principal */}
      <div className="container mt-4">
        <ProductList />
      </div>

      {/* Pie de página */}
      <footer className="bg-dark text-light text-center py-3">
        © 2024 Indumentaria-Accesorio
      </footer>
    </div>
  );
}

export default App;
