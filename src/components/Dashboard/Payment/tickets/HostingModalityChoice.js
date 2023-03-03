import { useState } from 'react';
import styled from 'styled-components';
import { Buttons, Subtitle, TicketChoiceContainer } from '../PaymentStyledComponents.js';

export default function HostingModalityChoice({ setIsHostingChosen, totalPrice, setTotalPrice }) {
  const optionWithNoHotel = 'Sem Hotel';
  const priceWithNoHotel = 0;
  const optionWithHotel = 'Com Hotel';
  const priceWithHotel = 350;

  const [includesHotel, setIncludesHotel] = useState(undefined); //true, false, undefined

  function chooseNoHotel() {
    if (includesHotel === undefined) {
      setIncludesHotel(false);
      setIsHostingChosen(true);
    } else if (includesHotel === false) {
      setIncludesHotel(undefined);
      setIsHostingChosen(false);
    } else {
      setIncludesHotel(false);
      setIsHostingChosen(true);
      setTotalPrice(totalPrice - priceWithHotel);
    }
  }

  function chooseWithHotel() {
    if (includesHotel) {
      setIncludesHotel(undefined);
      setIsHostingChosen(false);
      setTotalPrice(totalPrice - priceWithHotel);
    } else {
      setIncludesHotel(true);
      setIsHostingChosen(true);
      setTotalPrice(totalPrice + priceWithHotel);
    }
  }

  return (
    <TicketChoiceContainer>
      <Subtitle>Ótimo! Agora escolha sua modalidade de hospedagem</Subtitle>
      <Buttons>
        <Button background={includesHotel === false ? '#FFEED2' : '#E5E5E5'} onClick={() => chooseNoHotel()}>
          <p>{optionWithNoHotel}</p>
          <h3>R$ {priceWithNoHotel}</h3>
        </Button>
        <Button background={includesHotel ? '#FFEED2' : '#E5E5E5'} onClick={() => chooseWithHotel()}>
          <p>{optionWithHotel}</p>
          <h3>R$ {priceWithHotel}</h3>
        </Button>
      </Buttons>
    </TicketChoiceContainer>
  );
}

const Button = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 25px;
  width: 145px;
  height: 145px;
  border: 1px solid #cecece;
  border-radius: 20px;
  background: ${(props) => props.background};

  p {
    font-weight: 400;
    font-size: 16px;
    color: #454545;
  }

  h3 {
    font-weight: 400;
    font-size: 14px;
    color: #898989;
  }
`;
