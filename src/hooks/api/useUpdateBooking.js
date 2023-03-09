import useAsync from '../useAsync';
import useToken from '../useToken';

import { putBooking } from '../../services/bookingApi';

export default function useUpdateBooking(bookingId, room) {
  const token = useToken();

  const {
    data: updateBooking,
    loading: updateBookingLoading,
    error: updateBookingError,
    act: putUpdateBooking
  } = useAsync(() => putBooking(bookingId, room, token));

  return {
    updateBooking,
    updateBookingLoading,
    updateBookingError,
    putUpdateBooking
  };
};
