import React from 'react';
import PropTypes from 'prop-types';
import { ViewPropTypes } from 'react-native';
import { Container } from './styles';
import SectionTitle from '../SectionTitle';

function SectionHeader(props) {
  const { title, style } = props;
  return (
    <Container style={style}>
      <SectionTitle text={title} />
    </Container>
  );
}

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  style: ViewPropTypes.style,
};

SectionHeader.defaultProps = {
  style: {},
};

export default SectionHeader;
