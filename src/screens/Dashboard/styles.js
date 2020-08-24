import styled from 'styled-components';
import { COLORS, Typography } from 'styles';

const Container = styled.View`
  flex: 1;
  padding-bottom: 15px;
  background-color: ${COLORS.LIGHT_GREY_2};
`;

const Header = styled.View`
  background-color: ${COLORS.PRIMARY};
  padding: 25px 15px;
  width: 100%;
`;

const Balance = styled(Typography.BoldText)`
  font-size: 30px;
  color: ${COLORS.WHITE};
`;

const Section = styled.View`
  flex-shrink: 1;
`;

const Label = styled(Typography.RegularText)`
  font-size: 12px;
  text-transform: uppercase;
  color: ${COLORS.GREY};
`;

const Subtitle = styled(Typography.BoldText)`
  font-size: 22px;
  color: ${COLORS.WHITE};
`;

export { Container, Header, Balance, Label, Subtitle, Section };
