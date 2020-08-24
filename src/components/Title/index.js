import React from 'react';
import PropTypes from 'prop-types';
import { Text } from './styles';
import { COLORS } from 'styles';

function Title(props) {
  const { text, color } = props;
  return <Text color={color}>{text}</Text>;
}

Title.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};

Title.defaultProps = {
  color: COLORS.WHITE,
};

export default Title;
