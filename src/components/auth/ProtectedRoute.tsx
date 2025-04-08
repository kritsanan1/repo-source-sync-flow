
import { useAuth } from "@/contexts/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

export function ProtectedRoute() {
  const { user, isLoading } = useAuth();

  // Show loading state while checking authentication
  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">กำลังโหลด...</div>;
  }

  // Redirect to login page if not authenticated
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Render the protected route
  return <Outlet />;
}
