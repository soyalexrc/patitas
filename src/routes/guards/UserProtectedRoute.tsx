import {
  Navigate,
  // useLocation,
} from 'react-router-dom';
// import useAuth from '../hooks/api/auth/useAuth'

interface props {
  children: JSX.Element
}

export default function UserProtectedRoute({ children }: props) {
  // const { token } = useAuth();
  // console.log(token);
  // const location = useLocation();

  if ( !localStorage.getItem('patitas-token')) {
    return <Navigate to="/auth" replace  />;
  }

  return children;
};
