import styled from 'styled-components';
import { COLORS, Typography } from 'styles';

const Container = styled.View`
  height: 26px;
  border-radius: 13px;
  padding: 0 13px;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.PURPLE};
`;

const Text = styled(Typography.BoldText)`
  font-size: 11px;
  text-transform: uppercase;
  color: ${COLORS.WHITE};
`;

export { Text, Container };
