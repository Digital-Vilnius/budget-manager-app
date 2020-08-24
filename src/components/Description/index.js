import React from 'react';
import { ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
import { Text } from './styles';

function Description(props) {
  const { style, text, center } = props;
  return (
    <Text center={center} style={style}>
      {text}
    </Text>
  );
}

Description.propTypes = {
  text: PropTypes.string.isRequired,
  center: PropTypes.bool,
  style: ViewPropTypes.style,
};

Description.defaultProps = {
  style: {},
  center: false,
};

export default Description;
