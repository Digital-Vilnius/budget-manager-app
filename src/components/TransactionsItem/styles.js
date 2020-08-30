import styled from 'styled-components';
import { Typography, COLORS } from 'styles';

const Container = styled.TouchableOpacity`
  width: 100%;
  padding: 10px;
  background-color: ${COLORS.WHITE};
  border-bottom-width: 1px;
  border-bottom-color: ${COLORS.LIGHT_GREY};
  border-top-width: 1px;
  border-top-color: ${COLORS.LIGHT_GREY};
`;

const Title = styled(Typography.RegularText)`
  font-size: 14px;
  margin-bottom: 2px;
  color: ${COLORS.DARK_BLUE};
`;

const Description = styled(Typography.RegularText)`
  font-size: 13px;
  flex-grow: 1;
  flex-shrink: 1;
  color: ${COLORS.GREY};
`;

export { Title, Container, Description };
