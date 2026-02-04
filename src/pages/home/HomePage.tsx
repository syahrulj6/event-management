import EventImg1 from '../../assets/images/event-photo1.jpg';
import EventImg2 from '../../assets/images/event-photo2.jpg';
import EventImg3 from '../../assets/images/event-photo3.jpg';
import Communities from '../../assets/icons/communities.svg';
import Approval from '../../assets/icons/approval.svg';
import Registration from '../../assets/icons/registration.svg';

import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/Button';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Join Amazing <span className="text-blue-600">Events</span> Near You
            </h1>
            <p className="text-lg text-neutral-600 mb-6 leading-relaxed">Discover meaningful opportunities to give back to your community. Connect with like-minded people and make a difference through local volunteering events.</p>
            <div className="flex items-center gap-4 text-neutral-600 mb-8">
              <div className="flex items-center gap-2 flex-col">
                <img src={Approval} alt="verified events" />
                <span className="text-sm text-center md:text-md">Verified Events</span>
              </div>
              <div className="flex items-center flex-col gap-2">
                <img src={Registration} alt="easy registration" />
                <span className="text-sm text-center md:text-md">Easy Registration</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <img src={Communities} alt="communities" />
                <span className="text-sm text-center md:text-md">Community Impact</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="primary" onClick={() => navigate('/login')} className="px-8 py-3 flex items-center justify-center gap-2">
              Join Now & Volunteer
            </Button>
            <Button variant="secondary" onClick={() => navigate('events')} className="px-8 py-3 border-blue-600 text-blue-600 hover:bg-blue-50">
              Explore Events
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-8 border-t">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">500+</div>
              <div className="text-sm text-neutral-600">Active Volunteers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">120+</div>
              <div className="text-sm text-neutral-600">Events Monthly</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">50+</div>
              <div className="text-sm text-neutral-600">Partners</div>
            </div>
          </div>
        </div>

        <div className="hidden md:grid grid-cols-2 grid-rows-2 gap-4 h-125">
          <div className="row-span-2 relative overflow-hidden rounded-2xl shadow-xl group">
            <img src={EventImg1} alt="Community volunteering event" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm font-semibold">Tech Conference 2026</p>
                <p className="text-xs">50+ attended</p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl shadow-lg group">
            <img src={EventImg2} alt="Food donation drive" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent">
              <div className="absolute bottom-3 left-3 text-white">
                <p className="text-xs font-semibold">Youth Entrepreneurship Program</p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl shadow-lg group">
            <img src={EventImg3} alt="Youth mentoring program" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent">
              <div className="absolute bottom-3 left-3 text-white">
                <p className="text-xs font-semibold">Youth Mentoring</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
