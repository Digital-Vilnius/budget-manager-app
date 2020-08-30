import styled from 'styled-components';
import { COLORS } from 'styles';
import { KeyboardViewContainer } from 'components';

const Content = styled.SafeAreaView`
  flex: 1;
  background-color: ${COLORS.WHITE};
`;

const Wrapper = styled(KeyboardViewContainer)`
  justify-content: flex-end;
`;

export { Content, Wrapper };
