import styled from 'styled-components';
import { COLORS, Typography } from 'styles';

const Container = styled.View`
  flex: 1;
  background-color: ${COLORS.LIGHT_GREY_2};
`;

const Content = styled.ScrollView``;

const Header = styled.View`
  background-color: ${COLORS.PRIMARY};
  padding: 30px 0;
  width: 100%;
`;

const HeaderTitle = styled(Typography.BoldText)`
  color: ${COLORS.WHITE};
  font-size: 16px;
`;

const HeaderSubtitle = styled(Typography.MediumText)`
  color: ${COLORS.GREY};
  font-size: 14px;
`;

export { Container, Header, Content, HeaderTitle, HeaderSubtitle };
