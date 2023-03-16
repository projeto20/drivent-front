import { Typography } from '@material-ui/core';
import styled from 'styled-components';
import ActivitiesChoice from '../../../components/Dashboard/Activities/ActiviesChoice.js';

export default function Activities() {
  return(
    <><StyledTypography variant="h4">Escolha de atividades</StyledTypography>
      <ActivitiesChoice/>
  
    </>);
}

const StyledTypography = styled(Typography)`
  margin-bottom: 37px !important;
`;

