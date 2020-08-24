import styled from 'styled-components';
import { COLORS, Typography } from 'styles';

const Image = styled.Image`
  resize-mode: cover;
  width: 100%;
  height: 100%;
`;

const Placeholder = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  height: ${props => props.size - 2}px;
  border-radius: ${props => (props.size - 2) / 2}px;
  background-color: ${COLORS.PRIMARY};
`;

const PlaceholderText = styled(Typography.BoldText)`
  font-size: 15px;
  padding-left: 2px;
  color: ${COLORS.WHITE};
  text-transform: uppercase;
`;

const Container = styled.TouchableOpacity`
  width: ${props => props.size}px;
  padding: 1px;
  overflow: hidden;
  height: ${props => props.size}px;
  border-radius: ${props => props.size / 2}px;
  border: 1px solid ${COLORS.GREY};
`;

export { Image, Container, Placeholder, PlaceholderText };
