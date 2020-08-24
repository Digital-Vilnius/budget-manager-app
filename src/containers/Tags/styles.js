import styled from 'styled-components';
import { COLORS } from 'styles';

const Container = styled.View`
  flex: 1;
`;

const List = styled.FlatList``;

const Footer = styled.View`
  height: 30px;
  border-top-width: 1px;
  border-top-color: ${COLORS.LIGHT_GREY};
`;

export { Container, List, Footer };
