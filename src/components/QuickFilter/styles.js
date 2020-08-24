import styled from 'styled-components';
import { COLORS, Typography } from 'styles';

const Label = styled(Typography.RegularText)`
  font-size: 14px;
  text-align: center;
  color: ${COLORS.GREY_2};
`;

const Container = styled.TouchableOpacity`
  padding: 0 20px;
  background-color: ${COLORS.LIGHT_GREY_3};
  border: 1px solid ${COLORS.DARK_BORDER};
  height: 34px;
  align-items: center;
  justify-content: center;
  border-radius: 17px;
`;

export { Label, Container };
