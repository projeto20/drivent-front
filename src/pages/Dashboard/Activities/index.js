import { Typography } from '@material-ui/core';
import styled from 'styled-components';
import DayChoice from '../../../components/Dashboard/Activities/DayChoice';
import useTicket from '../../../hooks/api/useTicket';


export default function Activities() {
  const { ticket } = useTicket();

  return (
    <>
      <StyledTypography variant="h4">Escolha de Atividades</StyledTypography>
      {ticket?.status === 'PAID' && !ticket?.TicketType.isRemote ? <DayChoice /> : null}
      {!ticket ? (
        <StyledBox>
          <StyledText>Você precisa escolher um ingresso antes</StyledText>
        </StyledBox>
      ) : null}
      {ticket?.status === 'RESERVED' ? (
        <StyledBox>
          <StyledText>Você precisa ter confirmado pagamento antes de fazer a escolha de atividades</StyledText>
        </StyledBox>
      ) : null}
      {ticket?.status === 'PAID' && ticket?.TicketType.isRemote ? (
        <StyledBox>
          <StyledText>
            Sua modalidade de ingresso não necessita escolher atividade. Você terá acesso a todas as atividades.
          </StyledText>
        </StyledBox>
      ) : null}
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
