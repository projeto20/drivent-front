import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import HotelChoice from '../../../components/Dashboard/Hotel/HotelChoice';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

export default function Hotel() {
  const token = JSON.parse(localStorage.getItem('userData')).token;
  const [isPaid, setIsPaid] = useState(false);
  const [showHotels, setShowHotels] = useState(false);

  useEffect(() => {
    const ticketRequisition = axios.get(`${process.env.REACT_APP_API_BASE_URL}/tickets`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    ticketRequisition
      .then((res) => {
        if (res.data.status === 'PAID') {
          setIsPaid(true);
        }
        if (!res.data.TicketType.isRemote && res.data.TicketType.includesHotel) {
          setShowHotels(true);
        }
      })
      .catch((err) => console.log(err.response));
  }, []);

  return (
    <>
      <StyledTypography variant="h4">Escolha de hotel e quarto</StyledTypography>
      {isPaid ? (
        showHotels ? (
          <HotelChoice />
        ) : (
          <StyledBox>
            <StyledText>Sua modalidade de ingresso não inclui hospedagem</StyledText>
            <StyledText>Prossiga para a escolha de atividades</StyledText>
          </StyledBox>
        )
      ) : (
        <StyledBox>
          <StyledText>Você precisa ter confirmado pagamento antes de fazer a escolha de hospedagem</StyledText>
        </StyledBox>
      )}
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 37px !important;
`;

const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 75%;
`;

const StyledText = styled.div`
  font-weight: 400;
  font-size: 20px;
  color: #8e8e8e;
`;
