import React from 'react';
import * as PropTypes from 'prop-types';
import { ViewPropTypes } from 'react-native';
import { Container } from './styles';
import Icon from '../Icon';
import { COLORS } from 'styles';

function IconButton(props) {
  const { style, disabled, onPress, transparent, icon, iconSize } = props;
  return (
    <Container
      transparent={transparent}
      disabled={disabled}
      style={style}
      onPress={onPress}>
      <Icon disabled color={COLORS.WHITE} size={iconSize} name={icon} />
    </Container>
  );
}

IconButton.propTypes = {
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
  iconSize: PropTypes.number,
  icon: PropTypes.string.isRequired,
  style: ViewPropTypes.style,
};

IconButton.defaultProps = {
  style: {},
  iconSize: 30,
  disabled: false,
  onPress: () => {},
};

export default IconButton;
