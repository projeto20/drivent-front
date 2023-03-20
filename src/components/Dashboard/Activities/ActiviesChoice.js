import styled from 'styled-components';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import MainAuditorium from './MainAuditorium';
import SideAuditorium from './SideAuditorium';
import WorkshopRoom from './WorkshopRoom';

export default function ActivitiesChoice({ choosenDay }) {
  const token = JSON.parse(localStorage.getItem('userData')).token;
  const [activityData, setActivityData] = useState(null);

  useEffect(() => {
    const dateRequisition = axios.get(`${process.env.REACT_APP_API_BASE_URL}/activity/${choosenDay}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    dateRequisition
      .then((res) => {
        console.log(res.data);
        setActivityData(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, [choosenDay]);

  return (
    <>
      <EventRoomsContainer>
        {activityData && (
          <MainAuditorium data={activityData.Activities.filter((activity) => activity.place === 'Palco Principal')} />
        )}
        {activityData && (
          <SideAuditorium data={activityData.Activities.filter((activity) => activity.place === 'Palco Lateral')} />
        )}
        {activityData && (
          <WorkshopRoom data={activityData.Activities.filter((activity) => activity.place === 'Workshop')} />
        )}
      </EventRoomsContainer>
    </>
  );
}

const EventRoomsContainer = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: flex-start;
`;
