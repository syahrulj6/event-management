import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../services/api/auth.service';
import { setToken } from '../../utils/auth';
import { Button } from '../../components/ui/Button';

import VisibilityLock from '../../assets/icons/visibility-lock.svg';
import VisibilityOff from '../../assets/icons/visibility-off.svg';
import ArrowBack from '../../assets/icons/arrow-back.svg';
import EventImg from '../../assets/images/event-photo1.jpg';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await login(email, password);
      setToken(res.token);
      navigate('/');
    } catch {
      setError('Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      <div className="absolute left-6 top-10">
        <button className="text-neutral-600 group hover:text-black cursor-pointer flex gap-2 items-center" onClick={() => navigate('/')}>
          <img src={ArrowBack} alt="arrow back" className="w-5 h-5 " /> <p className="group-hover:underline">Back to Home</p>
        </button>
      </div>
      <div className="flex gap-4 flex-col items-center justify-center bg-white px-6">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-blue-600 font-semibold text-3xl">Welcome Back!</h1>
          <p className="text-neutral-600 text-sm">The faster you fill up, the faster you can join an event</p>
        </div>

        <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4 rounded-xl border p-6">
          <h1 className="text-xl font-semibold text-center">Login</h1>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <input type="email" placeholder="Email" className="w-full rounded-lg border px-3 py-2" value={email} onChange={(e) => setEmail(e.target.value)} required />

          <div className="relative">
            <input type={showPassword ? 'text' : 'password'} placeholder="Password" className="w-full rounded-lg border px-3 py-2 pr-10" value={password} onChange={(e) => setPassword(e.target.value)} required />

            <button type="button" onClick={() => setShowPassword((prev) => !prev)} className="absolute right-3 top-1/2 -translate-y-1/2">
              <img src={showPassword ? VisibilityOff : VisibilityLock} alt={showPassword ? 'Hide password' : 'Show password'} className="h-5 w-5" />
            </button>
          </div>

          <Button type="submit" variant="primary" className="w-full" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </Button>
        </form>
      </div>

      <div className="hidden md:block">
        <img src={EventImg} alt="Event" className="h-full w-full object-cover" />
      </div>
    </div>
  );
};

export default LoginPage;
