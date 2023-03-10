import api from './api';

export async function getBookings(token) {
  const response = await api.get('/booking', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function postBooking(room, token) {
  const response = await api.get(
    '/booking',
    { roomId: room },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
}

export async function postBookingv2(room, token) {
  const response = await api.post(
    '/booking',
    { roomId: room },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
}

export async function putBooking(bookingId, room, token) {
  const response = await api.get(`/booking/${bookingId}`, room, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
