import { AcitivitiesContainer, AuditorioContainer } from './ActivityStyledComponents';
import ActivityBox from './ActivityBox';

export default function WorkshopRoom({ data, registeredList, setRegisteredList }) {
  return (
    <AuditorioContainer>
      <h1>Sala de Workshop</h1>
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
