import React, { useState } from "react";
import { checkTransactionStatus } from "../api/transactions";
import Loader from "../components/Loader";

export default function TransactionStatus() {
  const [id, setId] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [err, setErr] = useState("");

  const onCheck = async () => {
    setErr("");
    setResult(null);
    if (!id) return setErr("Enter custom_order_id");
    setLoading(true);
    try {
      const res = await checkTransactionStatus(id);
      setResult(res);
    } catch (e) {
      setErr("Failed to fetch status");
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Check Transaction Status</h1>

      <div className="flex gap-2 mb-4">
        <input value={id} onChange={(e) => setId(e.target.value)} className="p-2 border rounded w-96" placeholder="Enter custom_order_id"/>
        <button onClick={onCheck} className="px-4 py-2 bg-blue-600 text-white rounded">Check</button>
      </div>

      {err && <div className="text-red-600 mb-2">{err}</div>}
      {loading && <Loader />}

      {result && (
        <div className="bg-white rounded p-4 shadow">
          <pre className="text-sm">{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
