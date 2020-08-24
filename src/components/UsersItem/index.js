import React from 'react';
import {
  AmountText,
  Container,
  Description,
  Details,
  LeftSection,
  RightSection,
  Title,
} from './styles';
import { ViewPropTypes } from 'react-native';
import { SharedTypes } from 'utils';
import Avatar from '../Avatar';
import PropTypes from 'prop-types';

function UsersItem(props) {
  const { user, style, onPress } = props;
  const { fullName, email } = user;
  const names = fullName.split(' ');

  return (
    <Container onPress={onPress} style={style}>
      <LeftSection>
        <Avatar placeholder={`${names[0][0]}${names[1][0]}`} size={40} />
        <Details>
          <Title>{fullName}</Title>
          <Description>{email}</Description>
        </Details>
      </LeftSection>
      <RightSection>
        <AmountText>100.00 €</AmountText>
        <Description>2020-10-10</Description>
      </RightSection>
    </Container>
  );
}

UsersItem.propTypes = {
  user: SharedTypes.UserType.isRequired,
  onPress: PropTypes.func,
  style: ViewPropTypes.style,
};

UsersItem.defaultProps = {
  style: {},
  onPress: () => {},
};

export default UsersItem;
