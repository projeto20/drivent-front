import axios from 'axios';
import styled from 'styled-components';
import { Subtitle } from '../PaymentStyledComponents';

export default function ConfirmTicket({ ticketTypes, totalPrice, setIsTicketConfirm }) {
  return (
    <StyledContainer>
      <Subtitle>Fechado! O total ficou em R$ {totalPrice}. Agora é só confirmar:</Subtitle>
      <ConfirmButton
        onClick={() => {
          const ticketType = ticketTypes.filter((e) => e.price === totalPrice);
          const data = { ticketTypeId: ticketType[0].id };
          const token = JSON.parse(localStorage.getItem('userData')).token;

          const promise = axios.post(`${process.env.REACT_APP_API_BASE_URL}/tickets`, data, {
            headers: { Authorization: `Bearer ${token}` },
          });
          promise
            .then((res) => {
              console.log(res);
              setIsTicketConfirm(true);
            })
            .catch((err) => {
              console.log(err.response);
            });
        }}
      >
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
