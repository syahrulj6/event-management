import { Link } from 'react-router-dom';

interface EventCardProps {
  id: number;
  title: string;
  date: string;
}

export const EventCard = ({ id, title, date }: EventCardProps) => {
  return (
    <Link to={`/events/${id}`} className="group block rounded-xl border border-neutral-200 bg-white p-6 transition-all duration-200 hover:shadow-lg hover:border-blue-200 hover:-translate-y-1">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-lg font-semibold group-hover:text-blue-600 transition-colors line-clamp-2">{title}</h3>
        <div className="shrink-0 ml-4">
          <div className="w-2 h-2 bg-blue-600 rounded-full group-hover:scale-150 transition-transform"></div>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center text-neutral-600 text-sm">
          <span className="w-4 h-4 mr-2 flex items-center justify-center">📅</span>
          <span>{date}</span>
        </div>
      </div>
    </Link>
  );
};
