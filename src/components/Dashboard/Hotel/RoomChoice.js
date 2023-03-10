import { useState } from 'react';
import styled from 'styled-components';
import person from '../../../../src/assets/images/person.svg';
import selectedperson from '../../../../src/assets/images/selectedPerson.svg';
import unavailable from '../../../../src/assets/images/unavailablePerson.svg';
import Hotel from '../../../pages/Dashboard/Hotel';
import { postBooking, postBookingv2 } from '../../../services/bookingApi';

export default function RoomChoice({ rooms, setUserBooking }) {
  const token = JSON.parse(localStorage.getItem('userData')).token;
  const [selected, setSelected] = useState(null);

  function handleRoomClick(id) {
    setSelected(id);
  }

  async function handleButtonClick() {
    const booking = await postBookingv2(selected, token);
    if (booking.bookingId) {
    }
  }

  return (
    <>
      <Title>Ótima pedida! Agora escolha seu quarto:</Title>
      <RoomsContainer>
        {rooms?.map((e, idx) => (
          <Room
            key={idx}
            id={e.id}
            handleRoomClick={handleRoomClick}
            isSelected={e.id === selected}
            capacity={e.capacity}
          />
        ))}
      </RoomsContainer>
      {selected ? <ReserveRoomButton onClick={handleButtonClick}>RESERVAR QUARTO</ReserveRoomButton> : ''}
    </>
  );
}

function Room({ id, capacity, isSelected, handleRoomClick }) {
  return (
    <RoomContainer onClick={() => handleRoomClick(id)} isSelected={isSelected}>
      <p>{id}</p>
      {capacity === 1 ? (
        <div>{isSelected ? <img src={selectedperson} /> : <img src={person} />}</div>
      ) : capacity === 2 ? (
        <div>
          <img src={person} />
          {isSelected ? <img src={selectedperson} /> : <img src={person} />}
        </div>
      ) : (
        <div>
          <img src={person} />
          <img src={person} />
          {isSelected ? <img src={selectedperson} /> : <img src={person} />}
        </div>
      )}
    </RoomContainer>
  );
}

export const ReserveRoomButton = styled.div`
  margin-top: 46px;
  width: 182px;
  height: 37px;
  display: flex;
  align-items: center;
  justify-self: flex-start;
  justify-content: center;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  color: black;
  font-size: 14px;
  background-color: #e0e0e0;
  :hover {
    cursor: pointer;
  }
`;
const Title = styled.p`
  font-size: 20px;
  color: #8e8e8e;
  margin: 52px 0px 33px 0px;
`;
const RoomsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const RoomContainer = styled.div`
  width: 190px;
  height: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #cecece;
  border-radius: 10px;
  margin-top: 8px;
  background-color: ${(props) => (props.isSelected ? '#FFEED2' : '')};
  p {
    margin-left: 16px;
  }
  div {
    margin-right: 16px;
    img {
      margin: 0px 3px;
      fill: blue;
    }
  }
`;
