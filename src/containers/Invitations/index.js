import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';
import { SharedTypes } from 'utils';
import { ViewPropTypes } from 'react-native';
import { List, InvitationsItem } from 'components';
import { connect } from 'react-redux';
import { InvitationsActions } from 'actions';

function Invitations(props) {
  const {
    style,
    invitations,
    isRefreshing,
    count,
    getInvitations,
    refreshInvitations,
    isLoading,
    filter,
    renderItem,
  } = props;

  return (
    <Container style={style}>
      <List
        filter={filter}
        isLoading={isLoading}
        count={count}
        getFunction={getInvitations}
        isRefreshing={isRefreshing}
        refreshFunction={refreshInvitations}
        data={invitations}
        renderItem={renderItem}
      />
    </Container>
  );
}

Invitations.propTypes = {
  renderItem: PropTypes.func,
  isLoading: PropTypes.bool.isRequired,
  isRefreshing: PropTypes.bool.isRequired,
  style: ViewPropTypes.style,
  count: PropTypes.number.isRequired,
  getInvitations: PropTypes.func.isRequired,
  refreshInvitations: PropTypes.func.isRequired,
  invitations: PropTypes.arrayOf(SharedTypes.InvitationType).isRequired,
  filter: SharedTypes.InvitationsFilter,
};

Invitations.defaultProps = {
  style: {},
  renderItem: item => <InvitationsItem key={item.id} invitation={item} />,
};

function mapStateToProps(state) {
  const { invitations } = state;
  const { count, isLoading, isRefreshing } = invitations;
  return {
    invitations: invitations.invitations,
    isLoading,
    count,
    isRefreshing,
  };
}

const mapDispatchToProps = {
  getInvitations: InvitationsActions.getInvitations,
  refreshInvitations: InvitationsActions.refreshInvitations,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Invitations);
