import React from 'react';
import {
  AmountText,
  Header,
  Content,
  Container,
  Description,
  Details,
  LeftSection,
  RightSection,
  Title,
  Date,
} from './styles';
import { ViewPropTypes } from 'react-native';
import { SharedTypes } from 'utils';
import Avatar from '../Avatar';
import Badge from '../Badge';

function TransactionsItem(props) {
  const { transaction, style } = props;
  const { category, description, amount, date, tag, spentBy } = transaction;
  const { fullName } = spentBy;
  const names = fullName.split(' ');

  return (
    <Container style={style}>
      <Header>
        <LeftSection>
          <Avatar placeholder={`${names[0][0]}${names[1][0]}`} size={40} />
          <Details>
            <Title>{fullName}</Title>
            <Date>{tag?.title || date}</Date>
          </Details>
        </LeftSection>
        <RightSection>
          <Badge text={category.title} />
        </RightSection>
      </Header>
      <Content>
        <Description numberOfLines={2}>{description}</Description>
        <AmountText>{`${amount.toFixed(2)} €`}</AmountText>
      </Content>
    </Container>
  );
}

TransactionsItem.propTypes = {
  transaction: SharedTypes.TransactionType.isRequired,
  style: ViewPropTypes.style,
};

TransactionsItem.defaultProps = {
  style: {},
};

export default TransactionsItem;
