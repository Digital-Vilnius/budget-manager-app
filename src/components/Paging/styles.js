import styled from 'styled-components';
import { COLORS } from 'styles';

const Container = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const Page = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  margin-right: 2px;
  margin-left: 2px;
  background-color: ${props => (props.active ? COLORS.WHITE : COLORS.GREY)};
`;

export { Container, Page };
