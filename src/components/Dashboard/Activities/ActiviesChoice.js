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
          <h2>Minecraft: montando o PC ideal</h2>
          <h3>09:00 - 10:00</h3></TimeBox>
        <Line></Line>
        <VacancyBox>
          <CgEnter
            style={{ color: 'green', width: '20px', height: '20px' }} />
          <h2>27 vagas</h2>
        </VacancyBox>

        </Activitie>
        <Activitie><TimeBox>
          <h2>Minecraft: montando o PC ideal</h2>
          <h3>09:00 - 10:00</h3></TimeBox>
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
          <h2>Palestra x</h2>
          <h3>09:00 - 11:00</h3></BigTimeBox>
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
          <h2>Minecraft: montando o PC ideal</h2>
          <h3>09:00 - 10:00</h3></TimeBox>
        <Line></Line>
        <VacancyBox>
          <CgEnter
            style={{ color: 'green', width: '20px', height: '20px' }} />
          <h2>27 vagas</h2>
        </VacancyBox>

        </Activitie>
        <Activitie><TimeBox>
          <h2>Minecraft: montando o PC ideal</h2>
          <h3>09:00 - 10:00</h3></TimeBox>
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
h2{
  font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 14px;
color: #343434;
}
h3{
  font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
color: #343434;
}
`;
const VacancyBox = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
h2{
    font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 9px;
line-height: 11px;
color: #078632;
white-space: nowrap;
}
`;
const TimeBox = styled.div`
display: flex;
flex-direction: column;
h2{
  font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 14px;
color: #343434;
}
h3{
  font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
color: #343434;
margin-top: 6px;
}
`;
const Line = styled.div`
display: flex;
width: 60px;
height: 0px;
border: 1px solid #CFCFCF;
transform: rotate(-90deg);
`;
const Activitie = styled.div`
box-sizing: border-box;
padding-left: 10px;
padding-right: 10px;
display: flex;
width: 265px;
height: 79px;
background: #F1F1F1;
border-radius: 5px;
margin-top: 10px;
align-items: center;
justify-content: center;
`;

const BigActivitie = styled.div`
box-sizing: border-box;
display: flex;
align-items: center;
padding: 10px;
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
display: flex;
align-items: center;
justify-content: center;
width: 131px;
height: 37px;
background: #E0E0E0;
box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
border-radius: 4px;
margin-right: 17px;
h2{
  font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
text-align: center;
color: #000000;
}
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
