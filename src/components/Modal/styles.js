import styled from 'styled-components';
import IconButton from '../IconButton';
import { COLORS } from 'styles';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${COLORS.WHITE};
`;

const Header = styled.View`
  height: 80px;
  align-items: center;
  position: relative;
  justify-content: center;
`;

const CloseIcon = styled(IconButton)`
  position: absolute;
  top: 20px;
  right: 15px;
`;

export { Container, Header, CloseIcon };
