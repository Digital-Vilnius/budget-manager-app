import styled from 'styled-components';
import { COLORS, Typography } from 'styles';

const Container = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  padding: 15px;
  border-top-width: 1px;
  border-bottom-width: 1px;
  background-color: ${COLORS.WHITE};
  border-bottom-color: ${COLORS.LIGHT_GREY};
  border-top-color: ${COLORS.LIGHT_GREY};
`;

const Title = styled(Typography.RegularText)`
  font-size: 15px;
  line-height: 21px;
  color: ${COLORS.DARK_BLUE};
  letter-spacing: 0.2px;
`;

export { Container, Title };
