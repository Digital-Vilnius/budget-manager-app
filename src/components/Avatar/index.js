import React from 'react';
import { ViewPropTypes } from 'react-native';
import * as PropTypes from 'prop-types';
import { Container, Image, Placeholder, PlaceholderText } from './styles';

export default function Avatar(props) {
  const { style, size, placeholder, source } = props;
  return (
    <Container size={size} style={style}>
      {!!source && <Image source={{ uri: source }} />}
      {!!placeholder && (
        <Placeholder size={size}>
          <PlaceholderText>{placeholder}</PlaceholderText>
        </Placeholder>
      )}
    </Container>
  );
}

Avatar.propTypes = {
  source: PropTypes.string,
  size: PropTypes.number,
  style: ViewPropTypes.style,
  placeholder: PropTypes.string,
};

Avatar.defaultProps = {
  style: {},
  source: null,
  size: 48,
  placeholder: 'VS',
};
