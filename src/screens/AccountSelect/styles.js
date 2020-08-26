import styled from 'styled-components';
import { COLORS } from 'styles';

const Container = styled.SafeAreaView`
  flex: 1;
`;

const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background-color: ${COLORS.WHITE};
`;

export { Container, Content };
