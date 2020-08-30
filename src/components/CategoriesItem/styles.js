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
  margin-bottom: 3px;
`;

const Description = styled(Typography.RegularText)`
  font-size: 13px;
  color: ${COLORS.GREY};
`;

const Header = styled.View`
  flex-direction: row;
  flex: 1;
`;

const Footer = styled.View`
  flex-direction: row;
  align-items: center;
  flex: 1;
`;

export { Title, Container, Header, Description, Footer };
