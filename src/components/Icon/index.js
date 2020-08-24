import React from 'react';
import PropTypes from 'prop-types';
import { Container, IoniconsIcon } from './styles';
import { COLORS } from 'styles';
import { ViewPropTypes, Platform } from 'react-native';

function Icon(props) {
  const { name, color, size, onPress, style, disabled } = props;
  return (
    <Container disabled={disabled} style={style} onPress={onPress}>
      <IoniconsIcon
        name={`${Platform.OS === 'ios' ? 'ios' : 'md'}-${name}`}
        size={size}
        color={color}
      />
    </Container>
  );
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
  color: PropTypes.string,
  size: PropTypes.number,
  style: ViewPropTypes.style,
};

Icon.defaultProps = {
  color: COLORS.WHITE,
  style: {},
  disabled: false,
  size: 30,
  onPress: () => {},
};

export default Icon;
