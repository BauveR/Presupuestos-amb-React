import { Budget } from '../../types/types';

interface SavedBudgetsProps {
  budgets: Budget[];
  orderedBy: string;
  onOrderByName: () => void;
  onOrderByDate: () => void;
}

export const SavedBudgets = ({
  budgets,
  orderedBy,
  onOrderByName,
  onOrderByDate,
}: SavedBudgetsProps) => {
  const formatDate = (date: Date) =>
    new Date(date).toLocaleString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });

  return (
    <div className="mt-6">
      <h3 className="font-bold text-gray-800 mb-2">Presupuestos guardados</h3>
      <div className="flex gap-4 mb-4">
        <button
          onClick={onOrderByName}
          className={`text-sm font-bold ${
            orderedBy === 'NAME' ? 'text-blue-700' : 'text-gray-400'
          }`}
        >
          ▼ Nombre
        </button>
        <button
          onClick={onOrderByDate}
          className={`text-sm font-bold ${
            orderedBy === 'DATE' ? 'text-blue-700' : 'text-gray-400'
          }`}
        >
          ▼ Fecha
        </button>
      </div>
      <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
        {budgets.map((budget, index) => (
          <div key={index} className="border rounded-lg p-4 bg-gray-50 text-orange-600">
            <div className="font-medium">{budget.customerInfo.name}</div>
            <div className="text-sm text-gray-600">{budget.customerInfo.email}</div>
            <div className="text-sm text-gray-600">{budget.customerInfo.phone}</div>
            <div className="mt-2 text-sm text-gray-500">
              <strong>Servicios:</strong> {budget.services.map(s => s.name).join(', ')}
            </div>
            {budget.services.find(s => s.code === 'web') && (
              <div className="text-xs text-gray-500">
                {budget.services.find(s => s.code === 'web')?.pages} páginas,{' '}
                {budget.services.find(s => s.code === 'web')?.languages} idiomas
              </div>
            )}
            <div className="mt-1 font-bold text-orange-600">
              Total: $
              {budget.discountedTotal
                ? budget.discountedTotal.toFixed(2)
                : budget.total.toFixed(2)}
              {budget.discountedTotal && (
                <span className="text-sm text-gray-500 line-through ml-2">
                  ${budget.total.toFixed(2)}
                </span>
              )}
            </div>
            <div className="text-xs text-gray-500 mt-1">{formatDate(budget.date)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
