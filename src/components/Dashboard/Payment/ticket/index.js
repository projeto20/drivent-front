import { useState } from 'react';
import ConfirmTicket from './ConfirmTicket';
import HostingModalityChoice from './HostingModalityChoice';
import TicketModalityChoice from './TicketModalityChoice';

export default function TicketProcess({ setIsTicketConfirm }) {
  const [isTicketChosen, setIsTicketChosen] = useState(false);
  const [isHostingChosen, setIsHostingChosen] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  return (
    <>
      <TicketModalityChoice
        setIsTicketChosen={setIsTicketChosen}
        isTicketChosen={isTicketChosen}
        setIsHostingChosen={setIsHostingChosen}
        setTotalPrice={setTotalPrice}
      />
      {isTicketChosen === 'face-to-face' ? (
        <HostingModalityChoice
          setIsHostingChosen={setIsHostingChosen}
          totalPrice={totalPrice}
          setTotalPrice={setTotalPrice}
        />
      ) : null}
      {isHostingChosen || isTicketChosen === 'online' ? (
        <ConfirmTicket totalPrice={totalPrice} setIsTicketConfirm={setIsTicketConfirm} />
      ) : null}
    </>
  );
}
