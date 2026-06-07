import type { ReactNode } from "react";

export type TransactionType = "Income" | "Expense" | "Commission" | "Refund";
export type PaymentMethod = "Cash" | "Wire Transfer" | "Cheque" | "Bank Transfer" | "Other";

export type TransactionRow = {
  id?: string;
  title: string;
  subtitle: string;
  date: string;
  amount: string;
  type: TransactionType;
  method: PaymentMethod;
  thumbnail?: { kind: "image"; src: string; alt: string };
  icon?: { kind: "icon"; type: "user" | "company" };
};

export type FinancialMetric = {
  title: string;
  value: string;
  meta: ReactNode;
  metaTone?: "neutral" | "success" | "critical";
};

