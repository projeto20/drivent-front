import styled from 'styled-components';
import HotelCard from './HotelCard';
import useHotels from '../../../hooks/api/useHotels';

export default function HotelChoice({ selectedhotel, setSelectedHotel }) {
  const { hotel } = useHotels();

  return (
    <>
      <StyledContainer>
        {hotel?.map(hotels => {
          return (<HotelCard hotel={hotels} selectedhotel={selectedhotel} setSelectedHotel={setSelectedHotel} key={hotels.id}/>);
        })}
      </StyledContainer>
    </>
  );
}

const StyledContainer = styled.div`
  display: flex;
  width: 629px;
`;
