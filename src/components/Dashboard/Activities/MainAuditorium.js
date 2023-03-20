import ActivityBox from './ActivityBox';
import { AcitivitiesContainer, AuditorioContainer } from './ActivityStyledComponents';

export default function MainAuditorium({ data, registeredList, setRegisteredList }) {
  return (
    <>
      <AuditorioContainer>
        <h1>Auditorio Principal</h1>
        <AcitivitiesContainer>
          {data?.map((activity, idx) => (
            <ActivityBox
              key={idx}
              activity={activity}
            />
          ))}
        </AcitivitiesContainer>
      </AuditorioContainer>
    </>
  );
}
