import React from 'react';
import PropTypes from 'prop-types';
import { Container, Label } from './styles';
import { SharedTypes } from 'utils';
import { ViewPropTypes } from 'react-native';

function QuickFilter(props) {
  const { style, filter, onPress } = props;
  const { label } = filter;
  return (
    <Container onPress={onPress} style={style}>
      <Label>{label}</Label>
    </Container>
  );
}

QuickFilter.propTypes = {
  filter: SharedTypes.QuickFilter.isRequired,
  onPress: PropTypes.func,
  style: ViewPropTypes.style,
};

QuickFilter.defaultProps = {
  style: {},
  onPress: () => {},
};

export default QuickFilter;
