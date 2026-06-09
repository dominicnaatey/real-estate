import { Invoice } from "./types";

// This would normally come from a database based on the ID
export const getInvoiceData = (id: string): Invoice => ({
  id,
  invoiceNumber: id.startsWith("INV") ? id : "INV-2024-0082",
  issueDate: "October 14, 2023",
  dueDate: "October 28, 2023",
  billTo: {
    name: "Alexander Wright",
    address: "42 Belgravia Mews North, London, SW1X 8RS",
    email: "alex.wright@example.com",
  },
  estateDetails: {
    name: "The Carlton Penthouse",
    ref: "PR-00892",
    status: "Active Managed",
  },
  items: [
    {
      description: "Monthly Property Oversight",
      details: "Full management and maintenance of The Carlton Penthouse for the period of Sept 2023.",
      quantity: 1,
      unitPrice: 2450,
      amount: 2450,
    },
    {
      description: "Professional Staging",
      details: "Curated furniture selection and layout for marketing showcase.",
      quantity: 1,
      unitPrice: 800,
      amount: 800,
    },
    {
      description: "Aerial Drone Photography",
      details: "4K resolution aerial video and 10 high-resolution external stills.",
      quantity: 1,
      unitPrice: 400,
      amount: 400,
    },
  ],
  subtotal: 3650,
  vatRate: 20,
  vatAmount: 730,
  totalAmount: 4380,
  currency: {
    symbol: "£",
    code: "GBP",
  },
  paymentInstructions: {
    bank: "National Westminster Bank",
    accountName: "EstatePro Management Ltd",
    sortCode: "60-00-01",
    accountNumber: "12345678",
    reference: id.startsWith("INV") ? id : "INV-2024-0082",
  },
});
