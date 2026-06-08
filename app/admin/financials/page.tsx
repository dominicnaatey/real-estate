import { FinancialsHeader } from "../../../components/admin/financials/FinancialsHeader";
import { FinancialsMetrics } from "../../../components/admin/financials/FinancialsMetrics";
import { FinancialsSideWidgets } from "../../../components/admin/financials/FinancialsSideWidgets";
import { FinancialsTransactionsTable } from "../../../components/admin/financials/FinancialsTransactionsTable";
import { FINANCIAL_METRICS, FINANCIAL_ROWS } from "../../../components/admin/financials/data";

export default function AdminFinancialsPage() {
  return (
    <div className="p-6 w-full max-w-screen-2xl mx-auto space-y-8">
      <FinancialsHeader />

      <FinancialsMetrics metrics={FINANCIAL_METRICS} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <FinancialsTransactionsTable rows={FINANCIAL_ROWS} />
        <FinancialsSideWidgets />
      </div>
    </div>
  );
}
