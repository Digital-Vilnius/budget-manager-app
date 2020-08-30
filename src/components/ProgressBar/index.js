import React from 'react';
import PropTypes from 'prop-types';
import { Content, Container } from './styles';
import { COLORS } from 'styles';
import { ViewPropTypes } from 'react-native';

function ProgressBar(props) {
  const { progress, style } = props;
  return (
    <Container style={style}>
      <Content progress={progress} />
    </Container>
  );
}

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
  style: ViewPropTypes.style,
};

ProgressBar.defaultProps = {
  color: COLORS.WHITE,
  style: {},
};

export default ProgressBar;
