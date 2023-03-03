import useEnrollment from '../../../hooks/api/useEnrollment';
import TicketProcess from '../../../components/Dashboard/Payment/ticket';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { Typography } from '@material-ui/core';
import PaymentWithCard from '../../../components/Payment/PaymentWithCard';
import axios from 'axios';

export default function Payment() {
  const { enrollment } = useEnrollment();
  const [isTicketConfirm, setIsTicketConfirm] = useState(false);
  const token = JSON.parse(localStorage.getItem('userData')).token;
  const [ticketTypes, setTicketTypes] = useState([]);

  useEffect(() => {
    const promise = axios.get(`${process.env.REACT_APP_API_BASE_URL}/tickets/types`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    promise
      .then((res) => {
        setTicketTypes(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  return (
    <>
      <StyledTypography variant="h4">Ingresso e pagamento</StyledTypography>
      {enrollment ? (
        isTicketConfirm ? (
          <PaymentWithCard />
        ) : (
          <TicketProcess ticketTypes={ticketTypes} setIsTicketConfirm={setIsTicketConfirm} />
        )
      ) : (
        <StyledBox>
          <StyledText>Você precisa completar sua inscrição antes de prosseguir pra escolha de ingresso</StyledText>
        </StyledBox>
      )}
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;
const StyledBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75%;
`;

const StyledText = styled.div`
  font-weight: 400;
  font-size: 20px;
  color: #8e8e8e;
`;
