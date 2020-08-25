import styled from 'styled-components';
import { COLORS, Typography } from 'styles';

const Container = styled.TouchableOpacity`
  width: 100%;
  padding: 5px 0;
  align-items: flex-start;
  justify-content: center;
`;

const Value = styled(Typography.MediumText)`
  color: ${COLORS.WHITE};
  font-size: 16px;
  margin-right: 15px;
`;

const ValueContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export { Container, Value, ValueContainer };
