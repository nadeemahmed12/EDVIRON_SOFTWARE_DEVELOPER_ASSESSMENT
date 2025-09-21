import React from "react";

export default function Table({ columns, rows }) {
  return (
    <div className="overflow-x-auto bg-white rounded shadow">
      <table className="min-w-full text-left">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((c) => (
              <th key={c.accessor} className="p-3 text-sm font-medium text-gray-600">
                {c.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="p-6 text-center text-gray-500">
                No transactions found.
              </td>
            </tr>
          ) : (
            rows.map((r) => (
              <tr key={r.collect_id || r.custom_order_id} className="border-t hover:bg-gray-50">
                {columns.map((c) => (
                  <td key={c.accessor} className="p-3 text-sm">
                    {c.cell ? c.cell(r) : r[c.accessor]}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
