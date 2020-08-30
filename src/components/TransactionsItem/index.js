import React from 'react';
import { Container, Description, Title } from './styles';
import { ViewPropTypes } from 'react-native';
import { SharedTypes } from 'utils';
import Avatar from '../Avatar';
import { Grid } from 'styles';

function TransactionsItem(props) {
  const { transaction, style } = props;
  const { category, description, amount, tag } = transaction;
  const { title } = category;

  return (
    <Container style={style}>
      <Grid.Row mb={15}>
        <Grid.Col mr={10}>
          <Avatar placeholder={title.substring(0, 2)} size={40} />
        </Grid.Col>
        <Grid.Col>
          <Title>{title}</Title>
          <Description numberOfLines={1}>{description}</Description>
        </Grid.Col>
      </Grid.Row>
      <Grid.Row spaceBetween>
        <Grid.Col>
          <Description>{amount}</Description>
        </Grid.Col>
        <Grid.Col>
          <Description>{amount}</Description>
        </Grid.Col>
      </Grid.Row>
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
