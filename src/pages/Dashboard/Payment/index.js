
import { useState } from 'react';
import { Title } from '../../../components/Auth';
import {
  PaymentConfirmedContainer,
  Subtitle,
  TicketInfoContainer,
} from '../../../components/Payment/paymentComponents';
import checkbox from '../../../assets/images/Vector.svg';

export default function Payment() {
  const ticket = { isRemote: true, containsHotel: false, price: 600.0 };
  const [paid, setPaid] = useState(false);

  return (
    <>
      <Title>Ingresso e pagamento</Title>
      <Subtitle>Ingresso Escolhido</Subtitle>
      <TicketInfoContainer>
        <p>{ticket.isRemote ? 'Remoto' : ticket.containsHotel ? 'Presencial + Com Hotel' : 'Presencial + Sem Hotel'}</p>
        <h3>R$ {ticket.price}</h3>
      </TicketInfoContainer>
      <Subtitle>Pagamento</Subtitle>

      {paid ? <PaymentConfirmed /> : ''}
    </>
  );
}

function PaymentConfirmed() {
  return (
    <PaymentConfirmedContainer>
      <img src={checkbox} alt="checked checkbox" />
      <div>
        <p>Pagamento Confirmado</p>
        <p>Prossiga para escolha de hospedagem e atividades</p>
      </div>
    </PaymentConfirmedContainer>
  );

}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px!important;
`;
const StyledBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75%;
`;
const StyledText = styled.div`
  width: 50%;
  font-weight: 400;
  font-size: 20px;
  color: #8E8E8E;
`;
const Buttons = styled.div`
display: flex;
`;
const Button = styled.button`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 17px;
margin-right: 25px;
width: 145px;
height: 145px;
border: 1px solid #CECECE;
border-radius: 20px;
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
