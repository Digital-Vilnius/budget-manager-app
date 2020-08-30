import React from 'react';
import PropTypes from 'prop-types';
import { Container, Content } from './styles';
import { ViewPropTypes } from 'react-native';
import { Keyboard } from 'react-native';

function KeyboardViewContainer(props) {
  const { children, style } = props;
  return (
    <Container onPress={Keyboard.dismiss} accessible={false}>
      <Content behavior="padding" style={style}>{children}</Content>
    </Container>
  );
}

KeyboardViewContainer.propTypes = {
  children: PropTypes.node.isRequired,
  style: ViewPropTypes.style,
};

KeyboardViewContainer.defaultProps = {
  style: {},
};

export default KeyboardViewContainer;
