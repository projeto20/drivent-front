import { useState } from 'react';
import styled from 'styled-components';

export default function HostingModalityChoice({ setIsHostingChosen, totalPrice, setTotalPrice }) {
  const teste11 = 'Sem Hotel';
  const teste12 = 0;
  const teste21 = 'Com Hotel';
  const teste22 = 350;

  const [includesHotel, setIncludesHotel] = useState(undefined);

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
      setTotalPrice(totalPrice - teste22);
    }
  }

  function chooseWithHotel() {
    if (includesHotel === undefined) {
      setIncludesHotel(true);
      setTotalPrice(totalPrice + teste22);
      setIsHostingChosen(true);
    } else if (includesHotel === true) {
      setIncludesHotel(undefined);
      setIsHostingChosen(false);
      setTotalPrice(totalPrice - teste22);
    } else {
      setIncludesHotel(true);
      setIsHostingChosen(true);
      setTotalPrice(totalPrice + teste22);
    }
  }

  return (
    <StyledContainer>
      <StyledText>Ótimo! Agora escolha sua modalidade de hospedagem</StyledText>
      <Buttons>
        <Button background={includesHotel === false ? '#FFEED2' : '#E5E5E5'} onClick={() => chooseNoHotel()}>
          <Teste1>{teste11}</Teste1>
          <Teste2>R$ {teste12}</Teste2>
        </Button>
        <Button background={includesHotel ? '#FFEED2' : '#E5E5E5'} onClick={() => chooseWithHotel()}>
          <Teste1>{teste21}</Teste1>
          <Teste2>R$ {teste22}</Teste2>
        </Button>
      </Buttons>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 44px;
`;

const StyledText = styled.div`
  font-weight: 400;
  font-size: 20px;
  color: #8e8e8e;
`;

const Buttons = styled.div`
  display: flex;
  margin-top: 17px;
`;

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
`;

const Teste1 = styled.span`
  font-weight: 400;
  font-size: 16px;
  color: #454545;
`;
const Teste2 = styled.span`
  font-weight: 400;
  font-size: 14px;
  color: #898989;
`;
