import React from 'react';
import { ViewPropTypes } from 'react-native';
import * as PropTypes from 'prop-types';
import { Container, Image, Placeholder, PlaceholderText } from './styles';
import { COLORS } from 'styles';

export default function Avatar(props) {
  const { style, size, placeholder, source, placeholderColor } = props;
  return (
    <Container size={size} style={style}>
      {!!source && <Image source={{ uri: source }} />}
      {!!placeholder && (
        <Placeholder color={placeholderColor} size={size}>
          <PlaceholderText size={size}>{placeholder}</PlaceholderText>
        </Placeholder>
      )}
    </Container>
  );
}

Avatar.propTypes = {
  source: PropTypes.string,
  placeholderColor: PropTypes.string,
  size: PropTypes.number,
  style: ViewPropTypes.style,
  placeholder: PropTypes.string,
};

Avatar.defaultProps = {
  style: {},
  placeholderColor: COLORS.PRIMARY,
  source: null,
  size: 48,
  placeholder: '',
};
