import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '../ui/Button';
import NavbarIcon from '../../assets/icons/navbar.svg';
import { clearToken, isAuthenticated } from '../../utils/auth';
import { logout } from '../../services/api/auth.service';

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `block md:px-4 py-2 md:rounded-lg text-sm font-medium transition-colors py-2 
   ${isActive ? 'text-blue-600' : 'text-neutral-700 hover:text-blue-600'}`;

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const authenticated = isAuthenticated();

  const handleLogout = async () => {
    await logout();
    clearToken();
    setOpen(false);
    navigate('/login');
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white border-b border-neutral-200">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <NavLink to="/" className="text-lg font-semibold text-blue-600">
          VolunteerEvent
        </NavLink>

        <div className="hidden md:flex items-center gap-4">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/events" className={navLinkClass}>
            Events
          </NavLink>

          {authenticated ? (
            <Button variant="danger" onClick={handleLogout}>
              Logout
            </Button>
          ) : (
            <NavLink to="/login">
              <Button variant="primary">Login</Button>
            </NavLink>
          )}
        </div>

        <button aria-label="Toggle navigation menu" onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg">
          <img src={NavbarIcon} alt="Toggle menu" className="w-6 h-6 " />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-neutral-200 px-4 pb-4">
          <NavLink to="/events" onClick={() => setOpen(false)} className={navLinkClass}>
            Events
          </NavLink>

          {authenticated ? (
            <Button variant="danger" className="w-full" onClick={handleLogout}>
              Logout
            </Button>
          ) : (
            <NavLink to="/login" onClick={() => setOpen(false)}>
              <Button variant="primary" className="w-full">
                Login
              </Button>
            </NavLink>
          )}
        </div>
      )}
    </nav>
  );
};
