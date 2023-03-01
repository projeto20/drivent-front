import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

import useEnrollment from '../../../hooks/api/useEnrollment';

export default function Payment() {
  const { enrollment } = useEnrollment();

  return(
    <>
      <StyledTypography variant="h4">Ingresso e pagamento</StyledTypography>
      {enrollment ? 
        <>
          <StyledText>
            Primeiro, escolha sua modalidade de ingresso
          </StyledText>
          <Buttons>
            <Button>
              <Teste1>Presencial</Teste1>
              <Teste2>R$ 250</Teste2>
            </Button>
            <Button>
              <Teste1>Online</Teste1>
              <Teste2>R$ 100</Teste2>
            </Button>
          </Buttons>
        </>
        :
        <StyledBox>
          <StyledText>
            Você precisa completar sua inscrição antes de prosseguir pra escolha de ingresso
          </StyledText>
        </StyledBox>
      }
    </>
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
