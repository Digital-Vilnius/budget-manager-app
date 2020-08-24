import styled from 'styled-components';
import { COLORS } from 'styles';
import hexToRgba from 'hex-to-rgba';

const Container = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background-color: ${hexToRgba(COLORS.BLACK, 0.3)};
`;

export { Container };
