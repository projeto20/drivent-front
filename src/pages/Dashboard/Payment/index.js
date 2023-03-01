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
