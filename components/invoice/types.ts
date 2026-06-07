export type InvoiceItem = {
  description: string;
  details?: string;
  quantity: number;
  unitPrice: number;
  amount: number;
};

export type Invoice = {
  id: string;
  invoiceNumber: string;
  issueDate: string;
  dueDate: string;
  billTo: {
    name: string;
    address: string;
    email: string;
  };
  estateDetails: {
    name: string;
    ref: string;
    status: string;
  };
  items: InvoiceItem[];
  subtotal: number;
  vatRate: number;
  vatAmount: number;
  totalAmount: number;
  currency: {
    symbol: string;
    code: string;
  };
  paymentInstructions: {
    bank: string;
    accountName: string;
    sortCode: string;
    accountNumber: string;
    reference: string;
  };
  notes?: string;
};
