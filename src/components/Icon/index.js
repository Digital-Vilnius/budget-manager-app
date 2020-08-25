import React from 'react';
import PropTypes from 'prop-types';
import { IoniconsIcon, Container } from './styles';
import { COLORS } from 'styles';
import { ViewPropTypes, Platform } from 'react-native';

function Icon(props) {
  const { name, color, size, style } = props;
  return (
    <Container size={size}>
      <IoniconsIcon
        style={style}
        name={`${Platform.OS === 'ios' ? 'ios' : 'md'}-${name}`}
        size={size}
        color={color}
      />
    </Container>
  );
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.number,
  style: ViewPropTypes.style,
};

Icon.defaultProps = {
  color: COLORS.WHITE,
  style: {},
  size: 30,
};

export default Icon;
