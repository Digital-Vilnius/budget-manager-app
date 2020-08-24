import styled from 'styled-components';
import { COLORS } from 'styles';

const Container = styled.View`
  padding: 5px 0;
  width: 100%;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: ${COLORS.LIGHT_GREY};
  background-color: ${COLORS.LIGHT_GREY_3};
`;

export { Container };
