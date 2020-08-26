import React, { useState } from 'react';
import { Content, Container } from './styles';
import { Button } from 'components';
import PropTypes from 'prop-types';
import { NAVIGATORS } from 'constants';
import { connect } from 'react-redux';
import { Accounts } from 'containers';
import { SharedTypes } from 'utils';
import { accounts as actions } from 'actions';

function AccountSelectScreen(props) {
  const { navigation, selectedAccount, selectAccount } = props;
  const [account, setAccount] = useState(selectedAccount);

  const navigate = () => {
    selectAccount({ account });
    navigation.reset({
      routes: [{ name: NAVIGATORS.MAIN }],
    });
  };

  return (
    <Container>
      <Content>
        <Accounts onPress={setAccount} />
        <Button disabled={!account} onPress={navigate} title="Select" />
      </Content>
    </Container>
  );
}

AccountSelectScreen.propTypes = {
  navigation: PropTypes.shape({
    reset: PropTypes.func.isRequired,
  }).isRequired,
  selectedAccount: SharedTypes.AccountType,
  selectAccount: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  const { accounts } = state;
  const { selectedAccount } = accounts;
  return { selectedAccount };
}

const mapDispatchToProps = {
  selectAccount: actions.selectAccount,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AccountSelectScreen);
