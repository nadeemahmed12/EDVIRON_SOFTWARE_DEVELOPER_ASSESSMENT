import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Transactions from "../pages/Transactions";
import SchoolTransactions from "../pages/SchoolTransactions";
import TransactionStatus from "../pages/TransactionStatus";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Transactions />} />
        <Route path="/school" element={<SchoolTransactions />} />
        <Route path="/status" element={<TransactionStatus />} />
      </Routes>
    </Router>
  );
}
