import { AcitivitiesContainer, AuditorioContainer } from './ActivityStyledComponents';
import ActivityBox from './ActivityBox';

export default function SideAuditorium({ data, registeredList, setRegisteredList }) {
  return (
    <AuditorioContainer>
      <h1>Auditorio Lateral</h1>
      <AcitivitiesContainer>
        {data?.map((activity, idx) => (
          <ActivityBox
            key={idx}
            activity={activity}
          />
        ))}
      </AcitivitiesContainer>
    </AuditorioContainer>
  );
}
