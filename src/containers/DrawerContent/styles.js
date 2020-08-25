import styled from 'styled-components';
import { COLORS, Typography } from 'styles';
import hexToRgba from 'hex-to-rgba';

const Container = styled.View`
  flex: 1;
  background-color: ${COLORS.PRIMARY};
`;

const Content = styled.ScrollView`
  padding: 10px;
`;

const HeaderTitle = styled(Typography.BoldText)`
  color: ${COLORS.WHITE};
  font-size: 16px;
`;

const Header = styled.View`
  padding: 15px 20px;
`;

const BalanceContainer = styled.View`
  width: 100%;
  background-color: ${hexToRgba(COLORS.BLACK, 0.2)};
  padding: 30px 20px;
  border-top-width: 1px;
  border-top-color: ${COLORS.LIGHT_BORDER};
  border-bottom-width: 1px;
  border-bottom-color: ${COLORS.LIGHT_BORDER};
`;

const BalanceLabel = styled(Typography.RegularText)`
  font-size: 12px;
  text-transform: uppercase;
  color: ${COLORS.GREY};
  margin-bottom: 5px;
`;

const BalanceText = styled(Typography.BoldText)`
  font-size: 25px;
  color: ${COLORS.WHITE};
`;

const Wrapper = styled.SafeAreaView`
  flex: 1;
`;

const NavigationItem = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  align-items: center;
  height: 60px;
`;

const Footer = styled.View`
  width: 100%;
  padding: 10px;
`;

const NavigationItemText = styled(Typography.MediumText)`
  font-size: 14px;
  margin-left: 15px;
  color: ${COLORS.GREY};
`;

export {
  Container,
  Content,
  Header,
  Wrapper,
  HeaderTitle,
  NavigationItem,
  NavigationItemText,
  BalanceContainer,
  BalanceLabel,
  BalanceText,
  Footer,
};
