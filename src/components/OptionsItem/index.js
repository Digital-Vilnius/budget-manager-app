import React from 'react';
import PropTypes from 'prop-types';
import { Container, Title } from './styles';
import { ViewPropTypes } from 'react-native';

function OptionsItem(props) {
  const { title, style, onPress, disabled } = props;

  return (
    <Container disabled={disabled} onPress={onPress} style={style}>
      <Title>{title}</Title>
    </Container>
  );
}

OptionsItem.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  style: ViewPropTypes.style,
  disabled: PropTypes.bool,
};

OptionsItem.defaultProps = {
  style: {},
  disabled: false,
};

export default OptionsItem;
