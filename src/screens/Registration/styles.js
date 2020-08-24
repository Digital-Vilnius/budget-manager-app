import styled from 'styled-components';
import { COLORS, SCREEN_WIDTH, Typography } from 'styles';

const SafeAreaContainer = styled.SafeAreaView`
  background-color: ${COLORS.LIGHT_GREY_2};
`;

const Content = styled.View``;

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

const PagingContainer = styled.ScrollView``;

const Page = styled.View`
  width: ${SCREEN_WIDTH}px;
  justify-content: flex-end;
`;

const IntroContainer = styled.View`
  width: 100%;
  padding: 25px 15px 0 15px;
  background-color: ${COLORS.WHITE};
`;

export {
  Footer,
  FooterText,
  FooterMediumText,
  Content,
  SafeAreaContainer,
  Page,
  PagingContainer,
  IntroContainer,
};
