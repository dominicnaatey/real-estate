export type LineItem = {
  id: number;
  description: string;
  note: string;
  qty: number;
  unitPrice: string;
};

export type InvoiceFormState = {
  client: string;
  setClient: (v: string) => void;
  issueDate: string;
  setIssueDate: (v: string) => void;
  dueDate: string;
  setDueDate: (v: string) => void;
  currency: string;
  setCurrency: (v: string) => void;
  lineItems: LineItem[];
  setLineItems: (v: LineItem[]) => void;
  clientNote: string;
  setClientNote: (v: string) => void;
  internalNote: string;
  setInternalNote: (v: string) => void;
  sendEmail: boolean;
  setSendEmail: (v: boolean) => void;
  onlinePayment: boolean;
  setOnlinePayment: (v: boolean) => void;
  hideTotals: boolean;
  setHideTotals: (v: boolean) => void;
};
