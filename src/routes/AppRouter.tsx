import { Routes, Route } from 'react-router-dom';
import { Welcome } from '../components/welcome/Welcome';
import { Presupuesto } from '../pages/Presupuesto';


export const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Welcome />} />
    <Route path="/presupuesto" element={<Presupuesto />} />

  </Routes>
);
