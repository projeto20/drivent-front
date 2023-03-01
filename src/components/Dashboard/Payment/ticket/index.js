import { useState } from 'react';
import ConfirmTicket from './ConfirmTicket';
import HostingModalityChoice from './HostingModalityChoice';
import TicketModalityChoice from './TicketModalityChoice';

export default function TicketProcess(params) {
  const [isTicketChosen, setIsTicketChosen] = useState(false);
  const [isHostingChosen, setIsHostingChosen] = useState(false);

  return (
    <>
      <TicketModalityChoice setIsTicketChosen={setIsTicketChosen} isTicketChosen={isTicketChosen} setIsHostingChosen={setIsHostingChosen}/>
      {isTicketChosen === 'face-to-face' ? (
        <HostingModalityChoice setIsHostingChosen={setIsHostingChosen} isHostingChosen={isHostingChosen} />
      ) : null}
      {isHostingChosen || isTicketChosen === 'online' ? <ConfirmTicket /> : null}
    </>
  );
}
