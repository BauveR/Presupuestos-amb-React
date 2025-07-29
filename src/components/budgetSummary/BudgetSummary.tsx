// BudgetSummary.tsx (componente principal refactorizado)
import { useState } from 'react';
import { useBudget } from '../../context/BudgetProvider';
import { SelectedServices } from './SelectedServices';
import { TotalSection } from './TotalSection';
import { CustomerForm } from './CustomerForm';
import { SavedBudgets } from './SavedBudgets';
import { SearchBar } from './SearchBar';

export const BudgetSummary = () => {
  const {
    selectedServices,
    total,
    discountedTotal,
    applyAnnualDiscount,
    resetDiscount,
    saveBudget,
    savedFilteredBudgets,
    ordenarPorNombre,
    orderByDate,
    filterBudgets,
    orderedBy,
  } = useBudget();

  const [customerInfo, setCustomerInfo] = useState({ name: '', email: '', phone: '' });
  const [showForm, setShowForm] = useState(false);

  const handleSave = () => setShowForm(true);
  const handleCancel = () => setShowForm(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    saveBudget(customerInfo);
    setCustomerInfo({ name: '', email: '', phone: '' });
    setShowForm(false);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 sticky top-6">
      <h2 className="text-2xl font-bold text-gray-600 mb-4">Resumen del Presupuesto</h2>

      {selectedServices.length === 0 ? (
        <p className="text-gray-500 italic">No hay servicios seleccionados</p>
      ) : (
        <>
          <SelectedServices services={selectedServices} />
          <TotalSection
            total={total}
            discountedTotal={discountedTotal}
            onApplyDiscount={applyAnnualDiscount}
            onResetDiscount={resetDiscount}
          />
          {!showForm ? (
            <button
              onClick={handleSave}
              className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded"
            >
              Guardar Presupuesto
            </button>
          ) : (
            <CustomerForm
              customerInfo={customerInfo}
              setCustomerInfo={setCustomerInfo}
              onCancel={handleCancel}
              onSubmit={handleSubmit}
            />
          )}
        </>
      )}

      <SearchBar onSearch={filterBudgets} />

      {savedFilteredBudgets.length > 0 && (
        <SavedBudgets
          budgets={savedFilteredBudgets}
          orderedBy={orderedBy}
          onOrderByName={ordenarPorNombre}
          onOrderByDate={orderByDate}
        />
      )}
    </div>
  );
};
