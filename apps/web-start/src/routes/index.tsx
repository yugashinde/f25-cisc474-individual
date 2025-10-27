import { createFileRoute, Link } from '@tanstack/react-router';
import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../components/LoginButton';



export const Route = createFileRoute('/')({
  // using Navigate to redirect to /dashboard/homepage for now 
  component:  RouteComponent, 
});

function RouteComponent() {

  const { isAuthenticated, isLoading } = useAuth0();
  const navigate = Route.useNavigate();

  // when the user is logged in, send them to /dashboard/homepage
  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      navigate({ to: '/dashboard/homepage' });
    }
  }, [isAuthenticated, isLoading, navigate]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      Welcome to my simple Learning Management System.
      <LoginButton />
      <hr></hr>
    
    </div>
  );
}