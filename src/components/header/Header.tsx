// components/Header/Header.tsx
import { HeaderOptions } from '../../types/types';
import { QuantitySelector } from '../quantitySelector/QuantitySelector';
import { DEFAULT_HEADER } from './headerData';
import { DEFAULT_QUANTITY_CONFIG, DEFAULT_QUANTITY_STYLES } from '../../config/quantityConfig';

interface HeaderProps {
  headerData?: HeaderOptions;
  quantity?: number;
  onQuantityChange?: (newValue: number) => void;
}

export const Header = ({
  headerData = DEFAULT_HEADER,
  quantity = 1,
  onQuantityChange,
}: HeaderProps) => {
  if (!headerData) return null;

  const handleIncrement = () => {
    const newValue = Math.min(quantity + 1, DEFAULT_QUANTITY_CONFIG.max || 10);
    onQuantityChange?.(newValue);
  };

  const handleDecrement = () => {
    const newValue = Math.max(quantity - 1, DEFAULT_QUANTITY_CONFIG.min || 1);
    onQuantityChange?.(newValue);
  };

  const titleParts = headerData.title.split(' ');
  const firstTitlePart = titleParts[0];
  const remainingTitle = titleParts.slice(1).join(' ');

  return (
    <header className="bg-gradient-to-b from-blue-700 to-blue-400 text-white py-10 px-4 shadow-xl">
      <div className="max-w-6xl mx-auto flex flex-col justify-between h-full">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-2xl mt-8 md:text-1xl font-bold pl-9 mb-1">
              {firstTitlePart}
            </h1>
            <h1 className="text-20xl md:text-8xl font-bold mb-1 pl-4">
              {remainingTitle}
            </h1>
            <p className="text-orange-300 font-medium text-xl pl-2">
              {headerData.description}
            </p>
          </div>
          <div className="flex flex-col items-end gap-4">
            <button
              onClick={() => (window.location.href = "/")}
              className="mt-8 bg-gradient-to-r from-white to-cyan-200 text-blue-800 text-md font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all font-sans whitespace-nowrap"
            >
              {headerData.buttonText}
            </button>
            <QuantitySelector
              value={quantity}
              onIncrement={handleIncrement}
              onDecrement={handleDecrement}
              config={DEFAULT_QUANTITY_CONFIG}
              styles={DEFAULT_QUANTITY_STYLES}
            />
          </div>
        </div>
        <div className="h-16"></div>
      </div>
    </header>
  );
};
