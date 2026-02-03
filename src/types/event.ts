export interface Event {
  id: number;
  event_name: string;
  event_date: Date;
  event_location: string;
  event_description: string;
  event_attendees: number;
  event_category: string;
  event_organizer: string;
  event_website: string | null;
  event_hashtag: string | null;
  event_sponsor: string | null;
  created_at: Date;
  updated_at: Date;
}
