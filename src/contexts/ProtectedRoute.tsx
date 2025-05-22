import { Navigate } from "react-router";
import { useAuth } from "../contexts/useAuth";
import { JSX } from "react";

interface ProtectedRouteProps {
    children: JSX.Element;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? children : <Navigate to="/login" />;
}
