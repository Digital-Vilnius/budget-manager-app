import React from 'react';
import PropTypes from 'prop-types';
import { Container, Text } from './styles';
import { ViewPropTypes } from 'react-native';

function Badge(props) {
  const { text, style } = props;
  return (
    <Container style={style}>
      <Text>{text}</Text>
    </Container>
  );
}

Badge.propTypes = {
  text: PropTypes.string.isRequired,
  style: ViewPropTypes.style,
};

Badge.defaultProps = {
  style: {},
};

export default Badge;
