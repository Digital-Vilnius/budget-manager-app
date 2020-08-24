import styled from 'styled-components';
import { COLORS, Typography } from 'styles';

const SafeAreaContainer = styled.SafeAreaView`
  background-color: ${COLORS.LIGHT_GREY_2};
`;

const Content = styled.View`
  padding-top: 25px;
  background-color: ${COLORS.WHITE};
`;

const Footer = styled.TouchableOpacity`
  height: 40px;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  background-color: ${COLORS.LIGHT_GREY_2};
`;

const FooterText = styled(Typography.RegularText)`
  font-size: 14px;
  color: ${COLORS.GREY};
  margin-right: 5px;
`;

const FooterMediumText = styled(Typography.MediumText)`
  font-size: 14px;
  color: ${COLORS.DARK_BLUE};
`;

export { Footer, FooterText, FooterMediumText, Content, SafeAreaContainer };
