import styled from 'styled-components';
import { Subtitle } from '../PaymentStyledComponents';

export default function ConfirmTicket({ totalPrice, setIsTicketConfirm }) {
  return (
    <>
      <Subtitle>Fechado! O total ficou em R$ {totalPrice}. Agora é só confirmar:</Subtitle>
      <ConfirmButton onClick={() => setIsTicketConfirm(true)}>
        <p>RESERVAR INGRESSO</p>
      </ConfirmButton>
    </>
  );
}

const ConfirmButton = styled.button`
  width: 162px;
  height: 37px;

  margin-top: 17px;

  background: #e0e0e0;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  p {
    font-weight: 400;
    font-size: 14px;
    color: #000000;
  }
`;
