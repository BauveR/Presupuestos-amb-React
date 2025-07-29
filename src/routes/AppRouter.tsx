// routes/AppRouter.tsx
import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Presupuesto } from '../pages/Presupuesto';
import { Welcome } from '../components/welcome/Welcome';

export const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Welcome />} />
    <Route path="/presupuesto" element={<Presupuesto />} />
    <Route path="/home" element={<Home />} />
    
    {/* Puedes añadir una ruta 404 */}
  </Routes>
);
