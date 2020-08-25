import styled from 'styled-components';
import { COLORS, Typography } from 'styles';

const Container = styled.TouchableOpacity`
  width: 100%;
  background-color: ${COLORS.WHITE};
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;
`;

const LeftContainer = styled.View`
  align-items: center;
  flex-direction: row;
  flex-grow: 1;
  flex-shrink: 1;
`;

const Title = styled(Typography.MediumText)`
  font-size: 14px;
  margin-bottom: 3px;
  color: ${COLORS.DARK_BLUE};
`;

const Description = styled(Typography.RegularText)`
  font-size: 13px;
  color: ${COLORS.GREY};
`;

const Details = styled.View`
  padding-right: 15px;
  flex-grow: 1;
  flex-shrink: 1;
`;

const IconContainer = styled.View`
  width: 36px;
  padding-left: 1px;
  margin-right: 15px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  height: 36px;
  border-radius: 18px;
  border: 1px solid ${COLORS.GREY};
`;

export { Container, Title, Description, Details, IconContainer, LeftContainer };
