import styled from 'styled-components';
import { COLORS, Typography } from 'styles';

const Container = styled.TouchableOpacity`
  width: 100%;
  padding: 3px 0;
  align-items: flex-start;
  justify-content: center;
`;

const Value = styled(Typography.MediumText)`
  font-size: 14px;
  margin-right: 8px;
  color: ${COLORS.GREY};
`;

const ValueContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export { Container, Value, ValueContainer };
