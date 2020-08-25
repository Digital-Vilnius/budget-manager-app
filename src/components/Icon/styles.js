import styled from 'styled-components';
import { Ionicons } from '@expo/vector-icons';

const Container = styled.View``;

const IoniconsIcon = styled(Ionicons)`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  line-height: ${props => props.size}px;
  text-align: center;
`;

export { IoniconsIcon, Container };
