import styled from 'styled-components';
import HotelCard from './HotelCard';
import useHotels from '../../../hooks/api/useHotels';
import RoomChoice from './RoomChoice';

export default function HotelChoice({ selectedhotel, setSelectedHotel, hotelSelected, setHotelSelected }) {
  const { hotel } = useHotels();

  return (
    <>
      <StyledContainer>
        {hotel?.map(hotels => {
          return (<HotelCard
            hotel={hotels}
            selectedhotel={selectedhotel}
            setSelectedHotel={setSelectedHotel}
            setHotelSelected={setHotelSelected}
            key={hotels.id}
          />);
        })}
      </StyledContainer>
      {hotelSelected && <RoomChoice />}
    </>
  );
}

const StyledContainer = styled.div`
  display: flex;
  width: 629px;
`;
