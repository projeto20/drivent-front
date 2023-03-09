import styled from 'styled-components';
import HotelCard from './HotelCard';
import { useEffect, useState } from 'react';
import { getHotels } from '../../../services/hotelApi';
import useToken from '../../../hooks/useToken';

export default function HotelChoice() {
  const token = useToken();
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    getHotels(token).then((hotels) => {
      setHotels(hotels);
    });
  }, []);

  return (
    <>
      <StyledContainer>
        {hotels.map(hotels => {
          return (<HotelCard hotel={hotels} key={hotels.id}/>);
        })}
      </StyledContainer>
    </>
  );
}

const StyledContainer = styled.div`
  display: flex;
  width: 629px;
`;
