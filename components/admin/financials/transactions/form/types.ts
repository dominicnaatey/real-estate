export const TRANSACTION_TYPES = ["Income", "Expense", "Commission", "Refund"] as const;
export const PAYMENT_METHODS = ["Cash", "Wire Transfer", "Cheque", "Bank Transfer", "Other"] as const;

export type TransactionType = typeof TRANSACTION_TYPES[number];
export type PaymentMethod = typeof PAYMENT_METHODS[number];

export type TransactionFormState = {
  date: string;
  setDate: (v: string) => void;
  type: TransactionType;
  setType: (v: TransactionType) => void;
  amount: string;
  setAmount: (v: string) => void;
  currency: string;
  setCurrency: (v: string) => void;
  party: string;
  setParty: (v: string) => void;
  property: string;
  setProperty: (v: string) => void;
  method: PaymentMethod;
  setMethod: (v: PaymentMethod) => void;
  reference: string;
  setReference: (v: string) => void;
  notes: string;
  setNotes: (v: string) => void;
};

export type TransactionRecord = {
  id: string;
  date: string;
  type: TransactionType;
  amount: string;
  currency: string;
  party: string;
  property?: string;
  method: PaymentMethod;
  reference?: string;
  notes?: string;
};
