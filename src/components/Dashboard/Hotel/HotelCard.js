import styled from 'styled-components';
import useHotelsInfos from '../../../hooks/api/useHotelsInfo';
import useBooking from '../../../hooks/api/useBooking';
import { useEffect, useState } from 'react';

export default function HotelCard({ hotel, selectedhotel, setSelectedHotel, setHotelSelected  }) {
  const { hotelInfo } = useHotelsInfos(hotel.id);
  const [ vacations, setVacation ] = useState(0);

  function chooseHotel(num) {
    setSelectedHotel(hotelInfo);
    console.log(hotelInfo);
    console.log(`fui clicado no ${num}`);
    setHotelSelected(true);
  }
  
  function CalcVacations(room) {
    let vacation = 0;

    for(let i=0; i < room?.length; i++) {
      const total = room[i]?.capacity - room[i].Booking.length;
      vacation += total;
    }
    
    setVacation(vacation);
  }

  useEffect(() => {
    CalcVacations(hotelInfo?.Rooms);
  }, [hotelInfo]);

  return (
    <Card onClick={() => chooseHotel(hotel?.id)}>
      <img
        src={hotel?.image}
        alt="foto-hotel"
      />
      <Title>{hotel?.name}</Title>
      <Info>
        <div>
          <h6>Tipo de acomodação:</h6>
          <p>Single, Double and Triple</p>
        </div>
        <div>
          <h6>Vagas disponiveis</h6>
          <p>{vacations}</p>
        </div>
      </Info>
    </Card>
  );
}

const Card = styled.div`
  width: 196px;
  height: 264px;

  background: #ebebeb;
  border-radius: 10px;
  padding: 14px;
  margin-right: 20px;

  img {
    width: 168px;
    height: 109px;
    border-radius: 5px;
  }
`;

const Title = styled.h3`
  font-weight: 400;
  font-size: 20px;
  color: #343434;
  line-height: 23px;
  margin: 10px 0;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 70px;

  div {
    font-size: 12px;
    color: #3c3c3c;

    h6 {
      font-weight: 700;
      margin-bottom: 2px;
    }

    p {
      font-weight: 400;
    }
  }
`;
