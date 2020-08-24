import React from 'react';
import PropTypes from 'prop-types';
import { BUTTONS, COLORS } from 'styles';
import { Container, Text, LoadingIndicator } from './styles';

function Button(props) {
  const { title, type, onPress, disabled, isLoading, style, outline } = props;

  return (
    <Container
      outline={outline}
      style={style}
      type={type}
      onPress={onPress}
      disabled={disabled || isLoading}>
      {!isLoading && (
        <Text type={type} outline={outline}>
          {title}
        </Text>
      )}
      {isLoading && <LoadingIndicator color={COLORS.WHITE} />}
    </Container>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
  onPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  outline: PropTypes.bool,
};

Button.defaultProps = {
  style: {},
  outline: false,
  disabled: false,
  isLoading: false,
  type: BUTTONS.PRIMARY,
};

export default Button;
