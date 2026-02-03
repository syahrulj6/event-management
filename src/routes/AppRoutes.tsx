import { Routes, Route } from 'react-router-dom';
import { AuthLayout } from '../components/Layout/AuthLayout';
import LoginPage from '../pages/auth/LoginPage';
import { AppLayout } from '../components/Layout/AppLayout';
import { ProtectedRoute } from './ProtectedRoutes';
import EventListPage from '../pages/events/EventListPage';
import HomePage from '../pages/home/HomePage';
import EventDetailPage from '../pages/events/EventDetailPage';
import { PublicRoute } from './PublicRoutes';
import NotFoundPage from '../pages/NotFoundPage';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
      </Route>

      <Route element={<AppLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/events"
          element={
            <ProtectedRoute>
              <EventListPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/events/:id"
          element={
            <ProtectedRoute>
              <EventDetailPage />
            </ProtectedRoute>
          }
        />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
