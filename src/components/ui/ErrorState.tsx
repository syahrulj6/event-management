interface ErrorStateProps {
  message?: string;
}

export const ErrorState = ({ message = 'Something went wrong. Please try again.' }: ErrorStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-10 text-center">
      <p className="text-sm text-red-600">{message}</p>
    </div>
  );
};
