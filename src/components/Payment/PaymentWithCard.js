import { useState } from 'react';
import { Title } from '../Auth';
import checkbox from '../../assets/images/Vector.svg';
import CreditCardComponent from './CreditCardComponent';
import 'react-credit-cards/es/styles-compiled.css';
import { PaymentConfirmedContainer, Subtitle, TicketInfoContainer } from './PaymentStyledComponents';

export default function PaymentWithCard() {
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
      <CreditCardComponent setPaid={setPaid}/>
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
