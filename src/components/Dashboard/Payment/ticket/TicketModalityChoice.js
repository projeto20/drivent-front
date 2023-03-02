import styled from 'styled-components';

export default function TicketModalityChoice({
  setIsTicketChosen,
  isTicketChosen,
  setIsHostingChosen,
  setTotalPrice,
}) {
  const teste11 = 'Presencial';
  const teste12 = 250;
  const teste21 = 'Online';
  const teste22 = 100;

  function chooseOnlineModality() {
    if (isTicketChosen === 'online') {
      setIsTicketChosen(false);
      setIsHostingChosen(false);
      setTotalPrice(0);
    } else {
      setIsTicketChosen('online');
      setIsHostingChosen(false);
      setTotalPrice(teste22);
    }
  }

  function chooseFaceToFaceModality() {
    if (isTicketChosen === 'face-to-face') {
      setIsTicketChosen(false);
      setIsHostingChosen(false);
      setTotalPrice(0);
    } else {
      setIsTicketChosen('face-to-face');
      setTotalPrice(teste12);
    }
  }

  return (
    <StyledContainer>
      <StyledText>Primeiro, escolha sua modalidade de ingresso</StyledText>
      <Buttons>
        <Button
          background={isTicketChosen === 'face-to-face' ? '#FFEED2' : '#E5E5E5'}
          onClick={() => chooseFaceToFaceModality()}
        >
          <Teste1>{teste11}</Teste1>
          <Teste2>R$ {teste12}</Teste2>
        </Button>
        <Button background={isTicketChosen === 'online' ? '#FFEED2' : '#E5E5E5'} onClick={() => chooseOnlineModality()}>
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
