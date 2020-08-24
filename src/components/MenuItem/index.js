import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Description,
  Details,
  IconContainer,
  Title,
  LeftContainer,
} from './styles';
import { ViewPropTypes } from 'react-native';
import Icon from '../Icon';
import { COLORS } from 'styles';

function MenuItem(props) {
  const { title, style, onPress, disabled, icon, description } = props;

  return (
    <Container disabled={disabled} onPress={onPress} style={style}>
      <LeftContainer>
        <IconContainer>
          <Icon color={COLORS.GREY} size={25} name={icon} />
        </IconContainer>
        <Details>
          <Title>{title}</Title>
          <Description numberOfLines={1}>{description}</Description>
        </Details>
      </LeftContainer>
      <Icon color={COLORS.GREY} size={30} name="arrow-round-forward" />
    </Container>
  );
}

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  style: ViewPropTypes.style,
  disabled: PropTypes.bool,
};

MenuItem.defaultProps = {
  style: {},
  disabled: false,
};

export default MenuItem;
