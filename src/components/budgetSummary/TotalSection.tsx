interface TotalSectionProps {
    total: number;
    discountedTotal: number | null;
    onApplyDiscount: () => void;
    onResetDiscount: () => void;
  }
  
  export const TotalSection = ({
    total,
    discountedTotal,
    onApplyDiscount,
    onResetDiscount,
  }: TotalSectionProps) => (
    <div className="border-t border-gray-200 pt-4 space-y-3">
      <div className="flex justify-between">
        <span className="text-lg font-bold text-gray-800">Total:</span>
        <span className="text-xl font-bold text-orange-600">${total.toFixed(2)}</span>
      </div>
  
      {discountedTotal ? (
        <>
          <div className="flex justify-between text-green-600">
            <span>Descuento anual (20%):</span>
            <span>-${(total - discountedTotal).toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-green-600 font-bold">
            <span>Total con descuento:</span>
            <span>${discountedTotal.toFixed(2)}</span>
          </div>
          <button
            onClick={onResetDiscount}
            className="w-full mt-2 bg-gray-200 hover:bg-gray-300 text-gray-600 py-2 px-4 rounded"
          >
            Quitar descuento
          </button>
        </>
      ) : (
        <button
          onClick={onApplyDiscount}
          className="w-full bg-blue-100 hover:bg-blue-200 text-blue-800 py-2 px-4 rounded"
        >
          Aplicar 20% de descuento por pago anual
        </button>
      )}
    </div>
  );
  