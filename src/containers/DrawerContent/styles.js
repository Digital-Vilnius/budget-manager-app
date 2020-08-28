import styled from 'styled-components';
import { COLORS, Typography } from 'styles';
import hexToRgba from 'hex-to-rgba';

const Container = styled.View`
  flex: 1;
  background-color: ${COLORS.PRIMARY};
`;

const AccountSelectContainer = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 30px;
`;

const AccountTitle = styled(Typography.BoldText)`
  color: ${COLORS.WHITE};
  font-size: 14px;
  margin-bottom: 2px;
`;

const Content = styled.ScrollView`
  padding: 10px;
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

const DescriptionLabel = styled(Typography.RegularText)`
  font-size: 13px;
  color: ${COLORS.GREY};
`;

const BalanceLabel = styled(Typography.RegularText)`
  font-size: 12px;
  color: ${COLORS.GREY};
  text-transform: uppercase;
`;

const BalanceText = styled(Typography.BoldText)`
  font-size: 25px;
  margin-top: 5px;
  color: ${COLORS.WHITE};
`;

const FullNameText = styled(Typography.BoldText)`
  font-size: 14px;
  margin-bottom: 3px;
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
  NavigationItem,
  NavigationItemText,
  BalanceContainer,
  DescriptionLabel,
  BalanceText,
  Footer,
  AccountSelectContainer,
  AccountTitle,
  FullNameText,
  BalanceLabel,
};
