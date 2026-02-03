import { useEffect, useState } from 'react';
import type { Event } from '../../types/event';
import { Loader } from '../../components/ui/Loader';
import { ErrorState } from '../../components/ui/ErrorState';
import { EmptyState } from '../../components/ui/EmptyState';
import { EventCard } from './components/EventCard';
import { getEvents } from '../../services/api/event.service';
import { formatDate } from '../../utils/formatDate';

const EventListPage = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await getEvents();
        setEvents(data);
      } catch (err) {
        setError('Failed to load events');
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) return <Loader />;

  if (error) return <ErrorState message={error} />;

  if (events.length === 0) return <EmptyState message="No events available" />;

  return (
    <div className="space-y-4">
      <h1 className="md:text-2xl text-xl  font-semibold">Upcoming Events 👋</h1>

      <div className="grid gap-4 sm:grid-cols-2">
        {events.map((event) => (
          <EventCard key={event.id} id={event.id} title={event.event_name} date={formatDate(event.event_date)} />
        ))}
      </div>
    </div>
  );
};

export default EventListPage;
