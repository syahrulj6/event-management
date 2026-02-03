import type { Event } from '../../types/event';

const BASE_URL = import.meta.env.VITE_BASE_API_URL;

export const getEvents = async (): Promise<Event[]> => {
  const res = await fetch(BASE_URL + '/api/events');

  if (!res.ok) {
    throw new Error('Failed to fetch events');
  }

  const json = await res.json();

  return json.data ?? json;
};

export const getEventsById = async (id: string): Promise<Event[]> => {
  const res = await fetch(`${BASE_URL}/api/events/${id}/detail`);

  if (!res.ok) {
    throw new Error('Failed to fetch events');
  }

  const json = await res.json();

  return json.data ?? json;
};
