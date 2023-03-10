import styled from 'styled-components';
import HotelCard from './HotelCard';
import useHotels from '../../../hooks/api/useHotels';
import RoomChoice from './RoomChoice';
import { useState } from 'react';
import { useEffect } from 'react';
import { getBookings } from '../../../services/bookingApi';

export default function HotelChoice() {
  const { hotel } = useHotels();
  const [userBooking, setUserBooking] = useState(null);
  const token = JSON.parse(localStorage.getItem('userData')).token;
  const [rooms, setRooms] = useState(null);
  const [hotelSelected, setHotelSelected] = useState(false);

  useEffect(async() => {
    const booking = await getBookings(token);
  }, []);

  return (
    <>
      <StyledContainer>
        {hotel?.map((hotels) => {
          return (
            <HotelCard
              hotel={hotels}
              rooms={rooms}
              setRooms={setRooms}
              setHotelSelected={setHotelSelected}
              key={hotels.id}
            />
          );
        })}
      </StyledContainer>
      {hotelSelected && <RoomChoice setRooms={setRooms} rooms={rooms} />}
    </>
  );
}

const StyledContainer = styled.div`
  display: flex;
  width: 629px;
`;
