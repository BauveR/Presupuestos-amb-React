// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Welcome } from './components/welcome/Welcome';
import { Presupuesto } from './pages/Presupuesto';
import { BudgetProvider } from './context/BudgetProvider';

export const App = () => {
  return (
    <BrowserRouter>
      <BudgetProvider>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/presupuesto" element={<Presupuesto />} />
        </Routes>
      </BudgetProvider>
    </BrowserRouter>
  );
};
