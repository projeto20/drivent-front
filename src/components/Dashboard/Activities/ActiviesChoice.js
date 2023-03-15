import styled from 'styled-components';
import { CgEnter } from 'react-icons/cg';
import { green } from '@material-ui/core/colors';
import { AiOutlineCloseCircle } from 'react-icons/ai';

export default function ActivitiesChoice() {
  return(<><DaysContainer>
    <DayBox><h2>Segunda</h2></DayBox>
    <DayBox><h2>Terça</h2></DayBox>
    <DayBox><h2>Quarta</h2></DayBox>
  </DaysContainer>
  <EventRoomsContainer>
    <AuditorioContainer><h1>Auditorio Principal</h1>
      <AcitivitiesBox>
        <Activitie><TimeBox>
          <h1>Minecraft: montando o PC ideal</h1>
          <h2>09:00 - 10:00</h2></TimeBox>
        <Line></Line>
        <VacancyBox>
          <CgEnter
            style={{ color: 'green', width: '20px', height: '20px' }} />
          <h2>27 vagas</h2>
        </VacancyBox>

        </Activitie>
        <Activitie><TimeBox>
          <h1>Minecraft: montando o PC ideal</h1>
          <h2>09:00 - 10:00</h2></TimeBox>
        <Line></Line>
        <VacancyBox>
          <AiOutlineCloseCircle
            style={{ color: 'red', width: '20px', height: '20px' }} />
          <h2>Esgotado</h2>
        </VacancyBox>

        </Activitie>
      </AcitivitiesBox>
    </AuditorioContainer>
    <AuditorioContainer><h1>Auditorio Lateral</h1>
      <AcitivitiesBox>
        <BigActivitie><BigTimeBox>
          <h1>Palestra x</h1>
          <h2>09:00 - 11:00</h2></BigTimeBox>
        <BigLine></BigLine>
        <VacancyBox>
          <CgEnter
            style={{ color: 'green', width: '20px', height: '20px' }} />
          <h2>27 vagas</h2>
        </VacancyBox>
        </BigActivitie>
      </AcitivitiesBox>
    </AuditorioContainer>
    <AuditorioContainer><h1>Sala de Workshop</h1>
      <AcitivitiesBox>
        <Activitie><TimeBox>
          <h1>Minecraft: montando o PC ideal</h1>
          <h2>09:00 - 10:00</h2></TimeBox>
        <Line></Line>
        <VacancyBox>
          <CgEnter
            style={{ color: 'green', width: '20px', height: '20px' }} />
          <h2>27 vagas</h2>
        </VacancyBox>

        </Activitie>
        <Activitie><TimeBox>
          <h1>Minecraft: montando o PC ideal</h1>
          <h2>09:00 - 10:00</h2></TimeBox>
        <Line></Line>
        <VacancyBox>
          <AiOutlineCloseCircle
            style={{ color: 'red', width: '20px', height: '20px' }} />
          <h2>Esgotado</h2>
        </VacancyBox>

        </Activitie>
      </AcitivitiesBox>
    </AuditorioContainer>

  </EventRoomsContainer>
 
  </>);
}

const BigLine = styled.div`
width: 149px;
height: 0px;
border: 1px solid #CFCFCF;
transform: rotate(-90deg);
`;
const BigTimeBox = styled.div`

`;
const VacancyBox = styled.div`
display: flex;
flex-direction: column;
h2{
    font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 9px;
line-height: 11px;
color: #078632;
}
`;
const TimeBox = styled.div`
display: flex;
flex-direction: column;
`;
const Line = styled.div`
display: flex;
width: 60px;
height: 0px;
border: 1px solid #CFCFCF;
transform: rotate(-90deg);
`;
const Activitie = styled.div`
display: flex;
width: 265px;
height: 79px;
background: #F1F1F1;
border-radius: 5px;
margin-top: 10px;
align-items: center;
`;

const BigActivitie = styled.div`
display: flex;
align-items: center;
width: 265px;
height: 168px;
background: #F1F1F1;
border-radius: 5px;
margin-top: 10px;
justify-content: center;
`;

const DaysContainer = styled.div`
display: flex;
`;
const DayBox = styled.div`
width: 131px;
height: 37px;
background: #E0E0E0;
box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
border-radius: 4px;
margin-right: 17px;
`;
const EventRoomsContainer = styled.div`
margin-top: 60px;
display: flex;
justify-content: flex-start;
`;
const AuditorioContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
h1{
    margin-bottom: 13px;
    font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 17px;
line-height: 20px;
color: #7B7B7B;
}
`;
const AcitivitiesBox = styled.div`
display: flex;
flex-direction: column;
width: 288px;
height: 392px;
border: 1px solid #D7D7D7;
align-items: center;
`;
