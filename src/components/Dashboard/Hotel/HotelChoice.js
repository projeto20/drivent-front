import styled from 'styled-components';
import HotelCard from './HotelCard';
import RoomChoice from './RoomChoice';

export default function HotelChoice({ hotelSelected, setHotelSelected }) {
  return (
    <>
      <StyledContainer>
        <HotelCard setHotelSelected={setHotelSelected} id={1} />
        <HotelCard setHotelSelected={setHotelSelected} id={2} />
        <HotelCard setHotelSelected={setHotelSelected} id={3} />
      </StyledContainer>
      {hotelSelected && <RoomChoice />}
    </>
  );
}

const StyledContainer = styled.div`
  display: flex;
  width: 629px;
  justify-content: space-between;
`;
