import styled from 'styled-components';
import { Typography, COLORS } from 'styles';

const Text = styled(Typography.RegularText)`
  color: ${COLORS.GREY};
  font-size: 14px;
  line-height: 21px;
  text-align: ${props => (props.center ? 'center' : 'left')};
`;

export { Text };
