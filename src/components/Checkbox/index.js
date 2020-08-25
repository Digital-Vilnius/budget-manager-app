import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';
import { ViewPropTypes } from 'react-native';
import Icon from 'components/Icon';

function Checkbox(props) {
  const { style, checked, multiple, disabled, size } = props;
  return (
    <Container
      size={size}
      disabled={disabled}
      multiple={multiple}
      style={style}
      checked={checked}>
      {checked && <Icon name="checkmark" />}
    </Container>
  );
}

Checkbox.propTypes = {
  checked: PropTypes.bool,
  size: PropTypes.number,
  disabled: PropTypes.bool,
  multiple: PropTypes.bool,
  style: ViewPropTypes.style,
};

Checkbox.defaultProps = {
  checked: false,
  size: 26,
  disabled: false,
  multiple: false,
  style: {},
};

export default Checkbox;
