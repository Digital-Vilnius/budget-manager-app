import styled from 'styled-components';
import { COLORS } from 'styles';

const Container = styled.View`
  width: 100%;
  background-color: ${COLORS.BACKGROUND};
  padding: 10px 0;
  border-bottom-width: 1px;
  border-bottom-color: ${COLORS.LIGHT_GREY};
`;

const Content = styled.ScrollView`
  width: 100%;
`;

export { Container, Content };
