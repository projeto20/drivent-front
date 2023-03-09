import styled from 'styled-components';
import useEnrollment from '../../../hooks/api/useEnrollment';
import { Typography } from '@material-ui/core';
import HotelChoice from '../../../components/Dashboard/Hotel/HotelChoice';
import RoomChoice from '../../../components/Dashboard/Hotel/RoomChoice';
import { useState } from 'react';

export default function Hotel() {
  const { enrollment } = useEnrollment();
  const token = JSON.parse(localStorage.getItem('userData')).token;
  const isRemote = 0;
  const includesHotel = 1;
  const [hotelSelected, setHotelSelected] = useState(false);

  return (
    <>
      <StyledTypography variant="h4">Escolha de hotel e quarto</StyledTypography>
      {enrollment ? (
        !isRemote && includesHotel ? (
          <HotelChoice hotelSelected={hotelSelected} setHotelSelected={setHotelSelected}/>
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
