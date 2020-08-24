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
import PropTypes from 'prop-types';
import Avatar from '../Avatar';

function AccountsItem(props) {
  const { account, style, onPress } = props;
  const { type, title, balance } = account;

  return (
    <Container onPress={onPress} style={style}>
      <LeftSection>
        <Avatar size={40} />
        <Details>
          <Title>{title}</Title>
          <Description>{type}</Description>
        </Details>
      </LeftSection>
      <RightSection>
        <AmountText>{`${balance.toFixed(2)} €`}</AmountText>
      </RightSection>
    </Container>
  );
}

AccountsItem.propTypes = {
  account: SharedTypes.AccountType.isRequired,
  style: ViewPropTypes.style,
  onPress: PropTypes.func.isRequired,
};

AccountsItem.defaultProps = {
  style: {},
};

export default AccountsItem;
