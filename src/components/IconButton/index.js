import React from 'react';
import * as PropTypes from 'prop-types';
import { ViewPropTypes } from 'react-native';
import { Container, BadgeCountContainer, BadgeCount } from './styles';
import Icon from '../Icon';
import { COLORS } from 'styles';

function IconButton(props) {
  const {
    style,
    disabled,
    onPress,
    transparent,
    icon,
    iconSize,
    badgeCount,
    iconColor,
  } = props;

  return (
    <Container
      transparent={transparent}
      disabled={disabled}
      style={style}
      onPress={onPress}>
      {!!badgeCount && (
        <BadgeCountContainer>
          <BadgeCount>{badgeCount}</BadgeCount>
        </BadgeCountContainer>
      )}
      <Icon disabled color={iconColor} size={iconSize} name={icon} />
    </Container>
  );
}

IconButton.propTypes = {
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
  iconSize: PropTypes.number,
  iconColor: PropTypes.string,
  badgeCount: PropTypes.number,
  icon: PropTypes.string.isRequired,
  style: ViewPropTypes.style,
};

IconButton.defaultProps = {
  style: {},
  iconSize: 30,
  iconColor: COLORS.WHITE,
  badgeCount: null,
  disabled: false,
  onPress: () => {},
};

export default IconButton;
