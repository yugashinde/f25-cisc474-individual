import { createFileRoute, Navigate } from '@tanstack/react-router';


export const Route = createFileRoute('/')({
  // using Navigate to redirect to /dashboard/homepage for now 
  component: () => <Navigate to="/dashboard/homepage" />, 
});