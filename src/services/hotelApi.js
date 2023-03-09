import api from './api';

export async function getHotels(token) {
  const response = await api.get('/hotels', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export async function getHotel(id, token) {
  const response = await api.get(`/hotels/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  
  return response.data;
};

/* export async function UpdateAccommodation(body, token) {
  const response = await api.post('/enrollments', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  
  return response.data;
}; */
