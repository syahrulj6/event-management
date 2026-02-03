interface EmptyStateProps {
  message?: string;
}

export const EmptyState = ({ message = 'No data available.' }: EmptyStateProps) => {
  return (
    <div className="flex items-center justify-center py-10">
      <p className="text-sm text-neutral-600">{message}</p>
    </div>
  );
};
