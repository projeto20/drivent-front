import useAsync from '../useAsync';
import useToken from '../useToken';

import { postBooking } from '../../services/bookingApi';

export default function useSaveBooking(room) {
  const token = useToken();

  const {
    data: saveBooking,
    loading: saveBookingLoading,
    error: saveBookingError,
    act: postSaveBooking
  } = useAsync(() => postBooking(room, token));

  return {
    saveBooking,
    saveBookingLoading,
    saveBookingError,
    postSaveBooking
  };
};
