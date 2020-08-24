import styled from 'styled-components';
import { COLORS, Typography } from 'styles';

const getPaddingTop = ({ hasLabel, multiline }) => {
  if (!hasLabel) {
    return 0;
  }

  if (multiline) {
    return 40;
  }

  return 29;
};

const getHeight = ({ hasLabel, multiline }) => {
  if (!hasLabel) {
    return 50;
  }

  if (multiline) {
    return 102;
  }

  return 70;
};

const getPaddingLeft = ({ hasLeftIcon }) => {
  if (hasLeftIcon) {
    return 50;
  }

  return 15;
};

const TextInput = styled.TextInput`
  color: ${props => (props.dark ? COLORS.LIGHT_TEXT : COLORS.DARK_TEXT)};
  font-size: 14px;
  line-height: 16px;
  padding-left: ${props => getPaddingLeft(props)}px;
  padding-right: 15px;
  padding-top: ${props => getPaddingTop(props)}px;
  height: 100%;
  font-family: Roboto-Regular;
`;

const Container = styled.View`
  width: 100%;
  height: ${props => getHeight(props)}px;
  border-top-width: 1px;
  border-top-color: transparent;
  border-bottom-width: 1px;
  border-bottom-color: ${props =>
    props.dark ? COLORS.LIGHT_BORDER : COLORS.DARK_BORDER};
`;

const LeftContainer = styled.View`
  position: absolute;
  left: 15px;
  top: 0;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const Label = styled(Typography.LightText)`
  font-size: 12px;
  position: absolute;
  top: 15px;
  left: 15px;
  line-height: 14px;
  color: ${COLORS.DARK_TEXT};
`;

export { TextInput, Container, Label, LeftContainer };
