import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Timesheet from "./components/Timesheet";
import Login from "./pages/Login";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Public Route (No Navbar) */}
        <Route path="/login" element={<Login />} />

        {/* Protected Routes (With Navbar) */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Dashboard />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/:week"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Timesheet />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        {/* Optional: Redirect unknown paths */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

/**
 * 🧱 Simple auth guard
 * Redirects user to /login if no token/session exists.
 */
function ProtectedRoute({ children }) {
  const token = sessionStorage.getItem("authToken"); // or your auth check logic
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
