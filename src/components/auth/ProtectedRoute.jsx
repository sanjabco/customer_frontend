import { Navigate } from 'react-router-dom';
import { useAuth } from "../../store/selectors";

const ProtectedRoute = ({ children }) => {
    const isAuthenticated = useAuth();

    if (!isAuthenticated) {
        return <Navigate to="/send-code" replace />;
    }
    return children;
};

export default ProtectedRoute;