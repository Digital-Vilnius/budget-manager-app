import React from 'react';
import PropTypes from 'prop-types';
import { Container, UserAvatar } from './styles';
import { ViewPropTypes } from 'react-native';

function Avatars(props) {
  const { style, avatars } = props;
  return (
    <Container style={style}>
      {avatars.map((avatar, index) => (
        <UserAvatar key={index} index={index} avatar={avatar} size={44} />
      ))}
    </Container>
  );
}

Avatars.propTypes = {
  avatars: PropTypes.array.isRequired,
  style: ViewPropTypes.style,
};

Avatars.defaultProps = {
  style: {},
};

export default Avatars;
