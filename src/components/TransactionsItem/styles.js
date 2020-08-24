import styled from 'styled-components';
import { Typography, COLORS } from 'styles';

const Container = styled.TouchableOpacity`
  width: 100%;
  background-color: ${COLORS.WHITE};
  border-bottom-width: 1px;
  border-bottom-color: ${COLORS.LIGHT_GREY};
  border-top-width: 1px;
  border-top-color: ${COLORS.LIGHT_GREY};
`;

const Header = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;
  border-bottom-width: 1px;
  padding: 10px;
  border-bottom-color: ${COLORS.LIGHT_GREY};
`;

const Content = styled.View`
  padding: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${COLORS.WHITE};
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
  padding-right: 30px;
  color: ${COLORS.GREY};
`;

const Date = styled(Typography.RegularText)`
  font-size: 13px;
  color: ${COLORS.GREY};
`;

const AmountText = styled(Typography.MediumText)`
  font-size: 16px;
  color: ${COLORS.DARK_BLUE};
`;

const LeftSection = styled.View`
  flex-direction: row;
  align-items: stretch;
`;

const RightSection = styled.View`
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;

const Details = styled.View`
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 10px;
`;

export {
  Title,
  Container,
  LeftSection,
  RightSection,
  Details,
  Description,
  AmountText,
  Header,
  Content,
  Date,
};
