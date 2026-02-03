import type { Event } from '../../../types/event';
import { Button } from '../../../components/ui/Button';
import { formatDate } from '../../../utils/formatDate';
import { useState } from 'react';
import ArrowBack from '../../../assets/icons/arrow-back.svg';
import { useNavigate } from 'react-router-dom';

interface EventDetailProps {
  event: Event;
}

export const EventDetail = ({ event }: EventDetailProps) => {
  const [joining, setJoining] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleJoin = async () => {
    setJoining(true);
    setMessage(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setMessage('Successfully joined the event!');
    } catch {
      setMessage('Failed to join event');
    } finally {
      setJoining(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:mt-2 mt-4">
      <div className="absolute left-6 top-24 ">
        <button className="text-neutral-600 group hover:text-black cursor-pointer flex gap-2 items-center" onClick={() => navigate(-1)}>
          <img src={ArrowBack} alt="arrow back" className="w-5 h-5 " /> <p className="group-hover:underline">Back</p>
        </button>
      </div>
      <div className="bg-white rounded-xl shadow-md border border-neutral-200">
        <div className="border-b border-neutral-200 px-6 py-5">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-bold mb-2">{event.event_name}</h1>
              <div className="flex flex-wrap items-center gap-4">
                <div className="inline-flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  <span className="text-sm font-medium text-neutral-600">{event.event_category}</span>
                </div>
                <span className="text-sm text-neutral-500">•</span>
                <span className="text-sm text-neutral-600">{event.event_attendees} attendees</span>
              </div>
            </div>
          </div>
        </div>

        <div className="px-6 py-6">
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="bg-neutral-100 rounded-lg p-4">
              <div className="text-sm font-medium text-neutral-500 mb-1">Date</div>
              <div className="text-lg font-semibold">{formatDate(event.event_date)}</div>
            </div>

            <div className="bg-neutral-100 rounded-lg p-4">
              <div className="text-sm font-medium text-neutral-500 mb-1">Location</div>
              <div className="text-lg font-semibold">{event.event_location}</div>
            </div>

            <div className="bg-neutral-100 rounded-lg p-4">
              <div className="text-sm font-medium text-neutral-500 mb-1">Attendees</div>
              <div className="text-lg font-semibold">{event.event_attendees}</div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-3">Description</h2>
            <div className="bg-neutral-100 rounded-lg p-4">
              <p className="text-neutral-700 leading-relaxed">{event.event_description}</p>
            </div>
          </div>

          <div className="border-t border-neutral-200 pt-6">
            <Button variant="primary" isLoading={joining} onClick={handleJoin} className="w-full md:w-auto px-8 py-3">
              Join Event
            </Button>

            {message && (
              <div className={`mt-4 inline-flex items-center px-4 py-2 rounded-lg ${message.includes('Successfully') ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                <div className={`w-2 h-2 rounded-full mr-2 ${message.includes('Successfully') ? 'bg-green-600' : 'bg-red-600'}`}></div>
                <span className="text-sm font-medium">{message}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
