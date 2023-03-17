import styled from 'styled-components';
import { CgEnter } from 'react-icons/cg';
import { green } from '@material-ui/core/colors';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import ActivityBox from './ActivityBox';
import { useEffect } from 'react';
import axios from 'axios';

export default function ActivitiesChoice({ choosenDay }) {
  const token = JSON.parse(localStorage.getItem('userData')).token;

  useEffect(() => {
    const dateRequisition = axios.get(`${process.env.REACT_APP_API_BASE_URL}/activity/${choosenDay}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    dateRequisition
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, [choosenDay]);
  return (
    <>
      <EventRoomsContainer>
        <AuditorioContainer>
          <h1>Auditorio Principal</h1>
          <AcitivitiesContainer>
            <ActivityBox />
            <Activitie>
              <TimeBox>
                <h2>Minecraft: montando o PC ideal</h2>
                <h3>09:00 - 10:00</h3>
              </TimeBox>
              <Line></Line>
              <VacancyBox>
                <AiOutlineCloseCircle style={{ color: 'red', width: '20px', height: '20px' }} />
                <h2>Esgotado</h2>
              </VacancyBox>
            </Activitie>
          </AcitivitiesContainer>
        </AuditorioContainer>

        <AuditorioContainer>
          <h1>Auditorio Lateral</h1>
          <AcitivitiesContainer>
            <BigActivitie>
              <BigTimeBox>
                <h2>Palestra x</h2>
                <h3>09:00 - 11:00</h3>
              </BigTimeBox>
              <BigLine></BigLine>
              <VacancyBox>
                <CgEnter style={{ color: 'green', width: '20px', height: '20px' }} />
                <h2>27 vagas</h2>
              </VacancyBox>
            </BigActivitie>
          </AcitivitiesContainer>
        </AuditorioContainer>

        <AuditorioContainer>
          <h1>Sala de Workshop</h1>
          <AcitivitiesContainer>
            <Activitie>
              <TimeBox>
                <h2>Minecraft: montando o PC ideal</h2>
                <h3>09:00 - 10:00</h3>
              </TimeBox>
              <Line></Line>
              <VacancyBox>
                <CgEnter style={{ color: 'green', width: '20px', height: '20px' }} />
                <h2>27 vagas</h2>
              </VacancyBox>
            </Activitie>
            <Activitie>
              <TimeBox>
                <h2>Minecraft: montando o PC ideal</h2>
                <h3>09:00 - 10:00</h3>
              </TimeBox>
              <Line></Line>
              <VacancyBox>
                <AiOutlineCloseCircle style={{ color: 'red', width: '20px', height: '20px' }} />
                <h2>Esgotado</h2>
              </VacancyBox>
            </Activitie>
          </AcitivitiesContainer>
        </AuditorioContainer>
      </EventRoomsContainer>
    </>
  );
}

const BigLine = styled.div`
  width: 149px;
  height: 0px;
  border: 1px solid #cfcfcf;
  transform: rotate(-90deg);
`;
const BigTimeBox = styled.div`
  h2 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    color: #343434;
  }
  h3 {
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
  h2 {
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
  h2 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    color: #343434;
  }
  h3 {
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
  border: 1px solid #cfcfcf;
  transform: rotate(-90deg);
`;
const Activitie = styled.div`
  box-sizing: border-box;
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  width: 265px;
  height: 79px;
  background: #f1f1f1;
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
  background: #f1f1f1;
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
  background: #e0e0e0;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  margin-right: 17px;
  h2 {
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
  h1 {
    margin-bottom: 13px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    color: #7b7b7b;
  }
`;
const AcitivitiesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 288px;
  height: 392px;
  border: 1px solid #d7d7d7;
  align-items: center;
`;
