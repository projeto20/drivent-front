import { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import { getHotels } from '../../../services/hotelApi';
import { ReserveRoomButton } from './RoomChoice';

export function ResumeBooking({ userBooking, setUserBooking, userUpdateBooking, setUserUpdateBooking }) {
  const [hotels, setHotels] = useState([]);
  const token = JSON.parse(localStorage.getItem('userData')).token;
  const hotel = hotels?.filter((e) => e.id === userBooking.Room.hotelId);
  console.log(hotel);
  useEffect(async() => {
    const data = await getHotels(token);
    setHotels(data);
  }, []);

  async function ChangeRoomButton() {
    console.log(userBooking);
    setUserUpdateBooking(userBooking);
    setUserBooking(null);
    console.log('Informação passada!');
  }

  return (
    <ResumeContainer>
      <p>Você já escolheu seu quarto</p>
      <Card >
        <img src={hotel[0]?.image} alt="foto-hotel" />
        <Title>{hotel[0]?.name}</Title>
        <Info>
          <div>
            <h6>Quarto Reservado</h6>
            <p>{userBooking.Room.name}</p>
          </div>
          <div>
            <h6>Pessoas no seu quarto</h6>
            <p>{(userBooking.Room.capacity === 1) ? 'Você' : (userBooking.Room.capacity === 2) ? 'Você e mais 1 pessoa' : (userBooking.Room.capacity === 3) ? 'Você e mais 2 pessoas' : ''} </p>
          </div>
        </Info>
      </Card>
      <ReserveRoomButton onClick={ChangeRoomButton}>Trocar quarto</ReserveRoomButton>
    </ResumeContainer>
  );
}

const ResumeContainer = styled.div`
    > p {
        color: #8e8e8e;
        font-size: 20px;
        margin-bottom: 14px;
    }
`;

const Card = styled.div`
  width: 196px;
  height: 264px;

  background-color: #FFEED2;
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
