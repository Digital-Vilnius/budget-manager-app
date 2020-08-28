import React, { useEffect, useState } from 'react';
import { Invitations, InvitationForm } from 'containers';
import { Header } from './styles';
import { IconButton, Input, Modal, ScreenContainer } from 'components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as _ from 'lodash';
import { InvitationActions } from 'actions';
import { SharedTypes } from 'utils';
import { Permissions } from 'constants';

function InvitationsScreen(props) {
  const { navigation, addInvitation, isLoading, selectedAccount } = props;
  const { permissions } = selectedAccount;
  const [addVisible, setAddVisible] = useState(false);
  const [filter, setFilter] = useState({});

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        if (permissions.includes(Permissions.INVITATIONS.ADD)) {
          return <IconButton onPress={() => setAddVisible(true)} icon="add" />;
        }
        return null;
      },
    });
  }, [navigation, permissions]);

  const search = ({ value }) => {
    setFilter({ ...filter, keyword: value });
  };

  const onSearchChange = _.debounce(search, 500);

  const add = data => {
    addInvitation(data, () => {
      setAddVisible(false);
    });
  };

  return (
    <ScreenContainer>
      <Header>
        <Input
          dark
          leftIcon="search"
          placeholder="Search by keyword"
          onChange={onSearchChange}
          name="keyword"
        />
      </Header>
      <Invitations filter={filter} />
      <Modal
        title="Add invitation"
        visible={addVisible}
        onClose={() => setAddVisible(false)}>
        <InvitationForm
          onCancel={() => setAddVisible(false)}
          isLoading={isLoading}
          onSubmit={add}
        />
      </Modal>
    </ScreenContainer>
  );
}

InvitationsScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  addInvitation: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  selectedAccount: SharedTypes.AccountType.isRequired,
};

function mapStateToProps(state) {
  const { invitation, account } = state;
  const { isLoading } = invitation;
  return { isLoading, selectedAccount: account.account };
}

const mapDispatchToProps = {
  addInvitation: InvitationActions.addInvitation,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InvitationsScreen);
