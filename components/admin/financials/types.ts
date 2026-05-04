import type { ReactNode } from "react";

export type TransactionStatus = "Paid" | "Pending" | "Overdue";

export type TransactionRow = {
  title: string;
  subtitle: string;
  date: string;
  amount: string;
  status: TransactionStatus;
  thumbnail?: { kind: "image"; src: string; alt: string };
  icon?: { kind: "icon"; type: "user" | "company" };
};

export type FinancialMetric = {
  title: string;
  value: string;
  meta: ReactNode;
  metaTone?: "neutral" | "success" | "critical";
};

