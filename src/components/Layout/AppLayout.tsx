import { Outlet } from 'react-router-dom';
import { Navbar } from '../Layout/Navbar';

export const AppLayout = () => {
  return (
    <div className="min-h-screen w-full ">
      <Navbar />

      <main className="container mx-auto px-4 pt-24 pb-8">
        <Outlet />
      </main>
    </div>
  );
};
