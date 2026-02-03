import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../utils/auth';
import type { JSX } from 'react';

export const PublicRoute = ({ children }: { children: JSX.Element }) => {
  if (isAuthenticated()) {
    return <Navigate to="/" replace />;
  }

  return children;
};
