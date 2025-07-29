// Servicios disponibles para seleccionar
export interface ServiceOptions {
  name: string;
  description: string;
  code: string;
  price: number;
  hasCustomOptions?: boolean;
}

// Servicio ya seleccionado, puede tener opciones adicionales
export interface SelectedService extends ServiceOptions {
  pages?: number;
  languages?: number;
}

// Información del encabezado de la app
export interface HeaderOptions {
  title: string;
  description: string;
  buttonText: string;
}

// Información del cliente
export interface CustomerInfo {
  name: string;
  email: string;
  phone: string;
}

// Presupuesto guardado
export interface Budget {
  customerInfo: CustomerInfo;
  services: SelectedService[];
  total: number;
  discountedTotal: number | null; // siempre está definido aunque sea null
  date: Date;
}

// Contexto principal de presupuesto
export interface BudgetContextType {
  selectedServices: SelectedService[];
  toggleService: (service: ServiceOptions) => void;
  updateServiceDetails: (code: string, details: { pages?: number; languages?: number }) => void;

  total: number;
  discountedTotal: number | null;
  applyAnnualDiscount: () => number;
  resetDiscount: () => void;

  saveBudget: (customerInfo: CustomerInfo) => void;
  ordenarPorNombre: () => void;
  orderByDate: () => void;
  filterBudgets: (term: string) => void;

  savedBudgets: Budget[];
  savedFilteredBudgets: Budget[];
  orderedBy: string; // 'NAME' | 'DATE'
}
