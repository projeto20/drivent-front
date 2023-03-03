import styled from 'styled-components';
import { Subtitle, TicketChoiceContainer } from '../PaymentStyledComponents.js';

export default function TicketModalityChoice({ setIsTicketChosen, isTicketChosen, setIsHostingChosen, setTotalPrice }) {
  const faceToFaceOption = 'Presencial';
  const faceToFacePrice = 250;
  const onlineOption = 'Online';
  const onlinePrice = 100;

  function chooseOnlineModality() {
    if (isTicketChosen === 'online') {
      setIsTicketChosen(false);
      setIsHostingChosen(false);
      setTotalPrice(0);
    } else {
      setIsTicketChosen('online');
      setIsHostingChosen(false);
      setTotalPrice(onlinePrice);
    }
  }

  function chooseFaceToFaceModality() {
    if (isTicketChosen === 'face-to-face') {
      setIsTicketChosen(false);
      setIsHostingChosen(false);
      setTotalPrice(0);
    } else {
      setIsTicketChosen('face-to-face');
      setTotalPrice(faceToFacePrice);
    }
  }

  return (
    <TicketChoiceContainer>
      <Subtitle>Primeiro, escolha sua modalidade de ingresso</Subtitle>
      <Buttons>
        <Button
          background={isTicketChosen === 'face-to-face' ? '#FFEED2' : '#E5E5E5'}
          onClick={() => chooseFaceToFaceModality()}
        >
          <p>{faceToFaceOption}</p>
          <h3>R$ {faceToFacePrice}</h3>
        </Button>
        <Button background={isTicketChosen === 'online' ? '#FFEED2' : '#E5E5E5'} onClick={() => chooseOnlineModality()}>
          <p>{onlineOption}</p>
          <h3>R$ {onlinePrice}</h3>
        </Button>
      </Buttons>
    </TicketChoiceContainer>
  );
}

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
