import dayjs from 'dayjs';

const formatDateString = (date?: string) => {
  if (!date) return 'invalid date';

  return dayjs(date).format('dddd, MMMM DD, YYYY');
};

export default formatDateString;
