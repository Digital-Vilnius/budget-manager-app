import styled from 'styled-components';
import { Typography, COLORS } from 'styles';

const Container = styled.TouchableOpacity`
  width: 100%;
  background-color: ${COLORS.WHITE};
  padding: 10px;
`;

const Title = styled(Typography.RegularText)`
  font-size: 14px;
  color: ${COLORS.DARK_BLUE};
  letter-spacing: 0.2px;
`;

const Description = styled(Typography.RegularText)`
  font-size: 13px;
  color: ${COLORS.GREY};
`;

export { Title, Container, Description };
