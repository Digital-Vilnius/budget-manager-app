import React from 'react';
import { Balance, Container, Header, Label, Section, Subtitle } from './styles';
import { Grid } from 'styles';
import { SharedTypes } from 'utils';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function DashboardScreen(props) {
  const { selectedAccount } = props;
  const { balance } = selectedAccount;

  return (
    <Container>
      <Header>
        <Grid.Row mb={25} center>
          <Section>
            <Grid.Row mb={5}>
              <Label>Balance</Label>
            </Grid.Row>
            <Grid.Row>
              <Balance>{`${balance?.toFixed(2)} $`}</Balance>
            </Grid.Row>
          </Section>
        </Grid.Row>
        <Grid.Row center>
          <Section>
            <Grid.Row mb={5} center>
              <Label>Incomes</Label>
            </Grid.Row>
            <Grid.Row center>
              <Subtitle>{`${balance?.toFixed(2)} $`}</Subtitle>
            </Grid.Row>
          </Section>
          <Section>
            <Grid.Row mb={5} center>
              <Label>Expenses</Label>
            </Grid.Row>
            <Grid.Row center>
              <Subtitle>{`${balance?.toFixed(2)} $`}</Subtitle>
            </Grid.Row>
          </Section>
        </Grid.Row>
      </Header>
    </Container>
  );
}

DashboardScreen.propTypes = {
  selectedAccount: SharedTypes.AccountType.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

function mapStateToProps(state) {
  const { account } = state;
  return { selectedAccount: account.account };
}

export default connect(mapStateToProps)(DashboardScreen);
