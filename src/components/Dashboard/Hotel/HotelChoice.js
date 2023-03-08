import styled from 'styled-components';
import HotelCard from './HotelCard';

export default function HotelChoice() {
  return (
    <>
      <StyledContainer>
        <HotelCard id={1}/>
        <HotelCard id={2}/>
        <HotelCard id={3}/>
      </StyledContainer>
    </>
  );
}

const StyledContainer = styled.div`
  display: flex;
  width: 629px;
  justify-content: space-between;
`;
