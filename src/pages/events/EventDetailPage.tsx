import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import type { Event } from '../../types/event';
import { getEventsById } from '../../services/api/event.service';
import { Loader } from '../../components/ui/Loader';
import { ErrorState } from '../../components/ui/ErrorState';
import { EventDetail } from './components/EventDetail';

const EventDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchDetail = async () => {
      try {
        const data = await getEventsById(id);
        if (Array.isArray(data)) {
          setEvent(data[0]);
        }
      } catch {
        setError('Failed to load event detail');
      } finally {
        setLoading(false);
      }
    };

    fetchDetail();
  }, [id]);

  if (loading) return <Loader />;
  if (error) return <ErrorState message={error} />;
  if (!event) return null;

  return <EventDetail event={event} />;
};

export default EventDetailPage;
