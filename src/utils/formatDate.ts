export const formatDate = (date: string | Date, locale: string = 'en-US'): string => {
  if (!date) return '-';

  const parsedDate = typeof date === 'string' ? new Date(date) : date;

  if (isNaN(parsedDate.getTime())) return '-';

  return parsedDate.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};
