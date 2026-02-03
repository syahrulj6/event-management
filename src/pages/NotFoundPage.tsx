import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-neutral-50 to-white flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        <div className="mb-8">
          <div className="relative">
            <div className="text-9xl font-bold text-neutral-200 opacity-50">404</div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-5xl font-bold text-neutral-700">Page Not Found</div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <div className="w-24 h-24 mx-auto bg-linear-tobr from-blue-100 to-purple-100 rounded-full flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-linear-to-b from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
              <span className="text-3xl text-white">?</span>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h1 className="text-2xl font-bold text-neutral-900 mb-3">Oops! Lost in Cyberspace</h1>
          <p className="text-neutral-600 leading-relaxed">The page you're looking for doesn't exist or has been moved. Don't worry, you can find your way back with the options below.</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button variant="secondary" onClick={handleGoBack} className="px-6 py-3">
            ← Go Back
          </Button>
          <Button variant="primary" onClick={handleGoHome} className="px-6 py-3">
            Go to Homepage
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
