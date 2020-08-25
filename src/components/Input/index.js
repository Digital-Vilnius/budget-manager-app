import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Label, TextInput, LeftContainer } from './styles';
import { COLORS } from 'styles';
import Icon from '../Icon';
import { ViewPropTypes } from 'react-native';

function Input(props) {
  const {
    onBlur,
    onChange,
    name,
    value,
    disabled,
    keyboardType,
    label,
    placeholder,
    multiline,
    secureTextEntry,
    leftIcon,
    style,
    dark,
  } = props;

  const [focus, setFocus] = useState(false);

  const handleOnChange = event => {
    const { nativeEvent } = event;
    const { text } = nativeEvent;
    onChange({ name, value: text });
  };

  const handleOnBlur = () => {
    onBlur({ name });
    setFocus(false);
  };

  return (
    <Container
      dark={dark}
      style={style}
      hasLabel={!!label}
      multiline={multiline}
      active={focus}>
      {!!label && <Label>{label}</Label>}
      {!!leftIcon && (
        <LeftContainer>
          <Icon size={28} disabled color={COLORS.GREY} name={leftIcon} />
        </LeftContainer>
      )}
      <TextInput
        dark={dark}
        hasLabel={!!label}
        hasLeftIcon={!!leftIcon}
        secureTextEntry={secureTextEntry}
        multiline={multiline}
        placeholder={placeholder}
        numberOfLines={multiline ? 3 : 1}
        placeholderTextColor={
          dark ? COLORS.LIGHT_PLACEHOLDER : COLORS.DARK_PLACEHOLDER
        }
        keyboardType={keyboardType}
        disabled={disabled}
        onBlur={handleOnBlur}
        onFocus={() => setFocus(true)}
        focus={focus}
        value={value ? value.toString() : null}
        onChange={handleOnChange}
      />
    </Container>
  );
}

Input.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.string,
  disabled: PropTypes.bool,
  multiline: PropTypes.bool,
  dark: PropTypes.bool,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  leftIcon: PropTypes.string,
  keyboardType: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  style: ViewPropTypes.style,
};

Input.defaultProps = {
  style: {},
  dark: false,
  value: null,
  leftIcon: null,
  label: null,
  multiline: false,
  secureTextEntry: false,
  onBlur: () => {},
  keyboardType: 'default',
  placeholder: null,
  disabled: false,
};

export default Input;
