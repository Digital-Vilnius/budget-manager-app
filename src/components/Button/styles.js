import styled from 'styled-components';
import { BUTTONS, COLORS } from 'styles';
import hexToRgba from 'hex-to-rgba';

const getBackgroundColor = ({ type, disabled, outline }) => {
  const alpha = disabled ? 0.5 : 1;
  let color;

  if (outline) {
    return 'transparent';
  }

  switch (type) {
    case BUTTONS.SECONDARY: {
      color = COLORS.GREY;
      break;
    }

    default: {
      color = COLORS.PRIMARY;
      break;
    }
  }

  return hexToRgba(color, alpha);
};

const getTextColor = ({ type, outline }) => {
  if (!outline) {
    return COLORS.WHITE;
  }

  switch (type) {
    case BUTTONS.SECONDARY: {
      return COLORS.GREY;
    }

    default: {
      return COLORS.PRIMARY;
    }
  }
};

const getBorderColor = ({ type, outline, disabled }) => {
  if (!outline) {
    return getBackgroundColor({ type, outline, disabled });
  }

  return hexToRgba(getTextColor({ type, outline }), 0.3);
};

const Container = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background-color: ${props => getBackgroundColor(props)};
  border-radius: 25px;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text`
  font-size: 14px;
  font-family: ${props => (props.outline ? 'Roboto-Regular' : 'Roboto-Medium')};
  text-transform: uppercase;
  color: ${props => getTextColor(props)};
`;

const LoadingIndicator = styled.ActivityIndicator``;

export { Container, Text, LoadingIndicator };
