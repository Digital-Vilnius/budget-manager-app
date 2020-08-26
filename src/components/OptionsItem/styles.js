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
  margin-bottom: 2px;
`;

const Description = styled(Typography.RegularText)`
  font-size: 13px;
  color: ${COLORS.GREY};
`;

const Details = styled.View`
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 10px;
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

export { Title, Container, Details, Description, LeftSection, RightSection };
