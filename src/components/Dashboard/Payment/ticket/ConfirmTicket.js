import styled from 'styled-components';

export default function ConfirmTicket({ totalPrice, setIsTicketConfirm }) {
  return (
    <StyledContainer>
      <StyledText>Fechado! O total ficou em R$ {totalPrice}. Agora é só confirmar:</StyledText>
      <ConfirmButton onClick={() => setIsTicketConfirm(true)}>
        <Teste3>RESERVAR INGRESSO</Teste3>
      </ConfirmButton>
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

const Teste3 = styled.span`
  font-weight: 400;
  font-size: 14px;
  color: #000000;
`;

const ConfirmButton = styled.button`
  width: 162px;
  height: 37px;

  margin-top: 17px;

  background: #e0e0e0;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
`;
