import React from 'react';
import PropTypes from 'prop-types';
import { Text } from './styles';

function SectionTitle(props) {
  const { text } = props;
  return <Text>{text}</Text>;
}

SectionTitle.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SectionTitle;
