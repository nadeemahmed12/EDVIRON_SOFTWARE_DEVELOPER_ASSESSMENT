import React from "react";

export default function Filters({
  status,
  setStatus,
  search,
  setSearch
}) {
  return (
    <div className="flex flex-wrap gap-3 items-center mb-4">
      <input
        type="text"
        placeholder="Search collect_id / custom_order_id..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="p-2 border rounded w-64"
      />

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="p-2 border rounded"
      >
        <option value="">All Status</option>
        <option value="success">Success</option>
        <option value="pending">Pending</option>
        <option value="failed">Failed</option>
      </select>
    </div>
  );
}
