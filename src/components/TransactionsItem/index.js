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
  const { category, description, amount, tag } = transaction;
  const { title } = category;

  return (
    <Container style={style}>
      <Header>
        <LeftSection>
          <Avatar placeholder={title.substring(0, 2)} size={40} />
          <Details>
            <Title>{title}</Title>
            <Date>{category.title}</Date>
          </Details>
        </LeftSection>
        <RightSection>
          <Badge text={tag?.title || 'Other'} />
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
