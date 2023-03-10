import styled from 'styled-components';
import HotelCard from './HotelCard';
import useHotels from '../../../hooks/api/useHotels';
import RoomChoice from './RoomChoice';
import { useState } from 'react';
import { useEffect } from 'react';
import { getBookings } from '../../../services/bookingApi';

export default function HotelChoice({ rooms, setRooms, hotelSelected, setHotelSelected }) {
  const { hotel } = useHotels();
  const [userBooking, setUserBooking] = useState(null);
  const token = JSON.parse(localStorage.getItem('userData')).token;

  useEffect(async() => {
    const booking = await getBookings(token);
    console.log(booking);
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
