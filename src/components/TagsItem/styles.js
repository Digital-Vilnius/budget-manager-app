import styled from 'styled-components';
import { Typography, COLORS } from 'styles';

const Container = styled.TouchableOpacity`
  width: 100%;
  background-color: ${COLORS.WHITE};
  padding: 10px;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;
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

const AmountText = styled(Typography.MediumText)`
  font-size: 14px;
  letter-spacing: 0.2px;
  margin-bottom: 2px;
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
};
