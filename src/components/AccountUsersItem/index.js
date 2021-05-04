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

function AccountUsersItem(props) {
  const { accountUser, style, onPress } = props;
  const { fullName, roles, email } = accountUser;

  return (
    <Container onPress={onPress} style={style}>
      <LeftSection>
        <Avatar placeholder={`${email.substring(0, 2)}`} size={40} />
        <Details>
          <Title>{fullName}</Title>
          <Description>{email}</Description>
        </Details>
      </LeftSection>
      <RightSection>
        <Badge text={roles[0]} />
      </RightSection>
    </Container>
  );
}

AccountUsersItem.propTypes = {
  accountUser: SharedTypes.AccountUserType.isRequired,
  onPress: PropTypes.func,
  style: ViewPropTypes.style,
};

AccountUsersItem.defaultProps = {
  style: {},
  onPress: () => {},
};

export default AccountUsersItem;
