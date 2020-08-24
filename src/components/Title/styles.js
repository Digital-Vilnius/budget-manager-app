import styled from 'styled-components';
import { Typography } from 'styles';

const Text = styled(Typography.BoldText)`
  font-size: 17px;
  color: ${props => props.color};
`;

export { Text };
