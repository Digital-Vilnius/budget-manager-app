import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';
import { ViewPropTypes } from 'react-native';

function ScreenContainer(props) {
  const { children, style } = props;
  return <Container style={style}>{children}</Container>;
}

ScreenContainer.propTypes = {
  children: PropTypes.node.isRequired,
  style: ViewPropTypes.style,
};

ScreenContainer.defaultProps = {
  style: {},
};

export default ScreenContainer;
