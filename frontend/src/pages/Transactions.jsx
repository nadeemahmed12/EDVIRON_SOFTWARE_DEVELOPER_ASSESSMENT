import React, { useEffect, useMemo, useState } from "react";
import { fetchAllTransactions } from "../api/transactions";
import Table from "../components/Table";
import Filters from "../components/Filter";
import Loader from "../components/Loader";
import { formatDate } from "../utils/helpers";
import { useSearchParams, Link } from "react-router-dom";

export default function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");
  const [status, setStatus] = useState(searchParams.get("status") || "");
  const [selectedSchools, setSelectedSchools] = useState(
    searchParams.get("schools") ? searchParams.get("schools").split(",") : []
  );
  const [page, setPage] = useState(Number(searchParams.get("page") || 1));
  const [pageSize] = useState(10);
  const [sortBy, setSortBy] = useState(searchParams.get("sort") || "payment_time");
  const [sortDir, setSortDir] = useState(searchParams.get("dir") || "desc");

  const [schools, setSchools] = useState([]);

  useEffect(() => {
    const params = {};
    if (search) params.q = search;
    if (status) params.status = status;
    if (selectedSchools.length) params.schools = selectedSchools.join(",");
    if (page !== 1) params.page = page;
    if (sortBy) params.sort = sortBy;
    if (sortDir) params.dir = sortDir;
    setSearchParams(params);
  }, [search, status, selectedSchools, page, sortBy, sortDir, setSearchParams]);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const data = await fetchAllTransactions(); 
        setTransactions(Array.isArray(data) ? data : []);
        const s = Array.from(new Set((data || []).map((d) => d.school_id).filter(Boolean)));
        setSchools(s);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  
  const filtered = useMemo(() => {
    let arr = [...transactions];

    if (search) {
      const q = search.toLowerCase();
      arr = arr.filter(
        (t) =>
          (t.collect_id && t.collect_id.toLowerCase().includes(q)) ||
          (t.custom_order_id && t.custom_order_id.toLowerCase().includes(q))
      );
    }
    if (status) {
      arr = arr.filter((t) => t.status && t.status.toLowerCase() === status.toLowerCase());
    }
    if (selectedSchools.length) {
      arr = arr.filter((t) => selectedSchools.includes(String(t.school_id)));
    }

    arr.sort((a, b) => {
      const A = a[sortBy];
      const B = b[sortBy];
      if (A == null) return 1;
      if (B == null) return -1;
      if (typeof A === "number" && typeof B === "number") {
        return sortDir === "asc" ? A - B : B - A;
      }
      const sA = String(A).toLowerCase();
      const sB = String(B).toLowerCase();
      if (sA < sB) return sortDir === "asc" ? -1 : 1;
      if (sA > sB) return sortDir === "asc" ? 1 : -1;
      return 0;
    });

    return arr;
  }, [transactions, search, status, selectedSchools, sortBy, sortDir]);

  const total = filtered.length;
  const totalPages = Math.ceil(total / pageSize);
  useEffect(() => {
    if (page > totalPages && totalPages > 0) setPage(1);
  }, [totalPages, page]);

  const paged = filtered.slice((page - 1) * pageSize, page * pageSize);

  const columns = [
    { header: "Collect ID", accessor: "collect_id" },
    { header: "School ID", accessor: "school_id" },
    { header: "Gateway", accessor: "gateway_name" },
    { header: "Order Amount", accessor: "order_amount" },
    { header: "Transaction Amount", accessor: "transaction_amount" },
    { header: "Status", accessor: "status" },
    {
      header: "Custom Order ID",
      accessor: "custom_order_id",
      cell: (r) => r.custom_order_id || "-",
    },
    {
      header: "Payment Time",
      accessor: "payment_time",
      cell: (r) => formatDate(r.payment_time),
    },
  ];

  if (loading) return <Loader />;

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold">Transactions Overview</h1>
        <div className="flex gap-2">
          <Link to="/status" className="px-3 py-2 border rounded">Check Status</Link>
          <Link to="/school" className="px-3 py-2 border rounded">By School</Link>
        </div>
      </div>

      <Filters
        status={status}
        setStatus={setStatus}
        search={search}
        setSearch={setSearch}
        selectedSchools={selectedSchools}
        setSelectedSchools={setSelectedSchools}
      />

      <div className="flex items-center gap-3 mb-3">
        <div>
          <label className="mr-2 text-sm">Sort by:</label>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="p-2 border rounded">
            <option value="payment_time">Payment Time</option>
            <option value="order_amount">Order Amount</option>
            <option value="transaction_amount">Transaction Amount</option>
            <option value="gateway">Gateway</option>
          </select>
        </div>

        <div>
          <button
            onClick={() => setSortDir((d) => (d === "asc" ? "desc" : "asc"))}
            className="p-2 border rounded"
            title="Toggle sort direction"
          >
            {sortDir === "asc" ? "Asc" : "Desc"}
          </button>
        </div>
      </div>

      <Table columns={columns} rows={paged} />

      <div className="flex items-center justify-between mt-4">
        <div>
          Showing {Math.min((page - 1) * pageSize + 1, total)} - {Math.min(page * pageSize, total)} of {total}
        </div>
        <div className="flex gap-2">
          <button onClick={() => setPage((p) => Math.max(1, p - 1))} className="px-3 py-1 border rounded">Prev</button>
          <span className="px-3 py-1 border rounded">{page}</span>
          <button onClick={() => setPage((p) => Math.min(totalPages || 1, p + 1))} className="px-3 py-1 border rounded">Next</button>
        </div>
      </div>
    </div>
  );
}
