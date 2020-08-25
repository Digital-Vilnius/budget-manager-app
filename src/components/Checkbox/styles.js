import styled from 'styled-components';
import { COLORS } from 'styles';

const Container = styled.TouchableOpacity`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: ${props => (props.multiple ? 0 : props.size / 2)}px;
  align-items: center;
  justify-content: center;
  background-color: ${props =>
    props.checked ? COLORS.PRIMARY : 'transparent'};
  border: 1px solid ${COLORS.LIGHT_GREY};
`;

export { Container };
