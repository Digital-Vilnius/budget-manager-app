import styled from 'styled-components';
import { COLORS } from 'styles';

const Container = styled.View`
  width: 100%;
  height: 6px;
  background-color: ${COLORS.DARK_BORDER};
`;

const Content = styled.View`
  width: ${props => (props.progress > 100 ? 100 : props.progress)}%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${props => (props.progress > 100 ? COLORS.DANGER : COLORS.PURPLE)};
`;

export { Content, Container };
