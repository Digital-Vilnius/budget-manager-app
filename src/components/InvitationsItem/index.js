import React from 'react';
import {
  Container,
  Description,
  Details,
  LeftSection,
  RightSection,
  Title,
} from './styles';
import { ViewPropTypes } from 'react-native';
import { SharedTypes } from 'core/utils';
import Avatar from '../Avatar';
import PropTypes from 'prop-types';
import Badge from '../Badge';

function InvitationsItem(props) {
  const { invitation, style, onPress } = props;
  const { roles, email, status } = invitation;

  return (
    <Container onPress={onPress} style={style}>
      <LeftSection>
        <Avatar placeholder={`${email.substring(0, 2)}`} size={40} />
        <Details>
          <Title>{email}</Title>
          <Description>{roles.join(', ')}</Description>
        </Details>
      </LeftSection>
      <RightSection>
        <Badge text={status} />
      </RightSection>
    </Container>
  );
}

InvitationsItem.propTypes = {
  invitation: SharedTypes.InvitationType.isRequired,
  onPress: PropTypes.func,
  style: ViewPropTypes.style,
};

InvitationsItem.defaultProps = {
  style: {},
  onPress: () => {},
};

export default InvitationsItem;
