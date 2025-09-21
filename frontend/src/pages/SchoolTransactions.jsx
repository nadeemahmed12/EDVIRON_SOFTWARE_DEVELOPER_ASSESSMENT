import React, { useEffect, useState } from "react";
import { fetchTransactionsBySchool, fetchAllTransactions } from "../api/transactions";
import Table from "../components/Table";
import Loader from "../components/Loader";
import { formatDate } from "../utils/helpers";

export default function SchoolTransactions() {
  const [schools, setSchools] = useState([]);
  const [selected, setSelected] = useState("");
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const all = await fetchAllTransactions();
        const s = Array.from(new Set((all || []).map((a) => a.school_id).filter(Boolean)));
        setSchools(s);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  useEffect(() => {
    if (!selected) return;
    setLoading(true);
    fetchTransactionsBySchool(selected)
      .then((d) => setTransactions(Array.isArray(d) ? d : []))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [selected]);

  const columns = [
    { header: "Collect ID", accessor: "collect_id" },
    { header: "Order Amt", accessor: "order_amount" },
    { header: "Txn Amt", accessor: "transaction_amount" },
    { header: "Gateway", accessor: "gateway_name" },
    { header: "Status", accessor: "status" },
    { header: "Payment Time", accessor: "payment_time", cell: (r) => formatDate(r.payment_time) },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Transactions by School</h1>

      <div className="mb-4 flex gap-3 items-center">
        <select value={selected} onChange={(e) => setSelected(e.target.value)} className="p-2 border rounded">
          <option value="">Select School</option>
          {schools.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      {loading ? <Loader /> : <Table columns={columns} rows={transactions} />}
    </div>
  );
}
