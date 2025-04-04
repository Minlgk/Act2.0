import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css'; // Asegúrate de tener este archivo o eliminar la línea si no lo usas

const container = document.getElementById('root');

if (!container) {
  throw new Error("No se encontró el elemento con id 'root' en el HTML");
}

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
