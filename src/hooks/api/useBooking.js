import useAsync from '../useAsync';
import useToken from '../useToken';

import { getBookings } from '../../services/bookingApi';

export default function useBooking() {
  const token = useToken();

  const {
    data: booking,
    loading: bookingLoading,
    error: bookingError,
    act: getBooking
  } = useAsync(() => getBookings(token));

  return {
    booking,
    bookingLoading,
    bookingError,
    getBooking
  };
};
