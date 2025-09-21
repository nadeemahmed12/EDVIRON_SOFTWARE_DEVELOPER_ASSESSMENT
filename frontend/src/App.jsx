// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Transactions from "./pages/Transactions";
import SchoolTransactions from "./pages/SchoolTransactions";
import TransactionStatus from "./pages/TransactionStatus";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* ✅ Navbar */}
        <nav className="bg-blue-600 text-white p-4 shadow-md">
          <div className="container mx-auto flex gap-6">
            <Link to="/" className="hover:underline">
              Transactions
            </Link>
            <Link to="/school" className="hover:underline">
              By School
            </Link>
            <Link to="/status" className="hover:underline">
              Status
            </Link>
          </div>
        </nav>

        {/* ✅ Routes */}
        <div className="p-6">
          <Routes>
            <Route path="/" element={<Transactions />} />
            <Route path="/school" element={<SchoolTransactions />} />
            <Route path="/status" element={<TransactionStatus />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
