import React from 'react';
import PropTypes from 'prop-types';
import { Container, Footer, List } from './styles';
import { Mapper, SharedTypes } from 'utils';
import { ViewPropTypes } from 'react-native';
import { SectionHeader, Separator, UsersItem } from 'components';
import { connect } from 'react-redux';
import { users as actions } from 'actions';
import { LIST } from 'constants';
import autoBind from 'auto-bind';
import _ from 'lodash';

class Users extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      paging: {
        limit: LIST.LIMIT,
        offset: 0,
      },
    };

    autoBind(this);
  }

  componentDidMount() {
    const { refreshUsers, filter } = this.props;
    const { paging } = this.state;
    refreshUsers({ paging, filter });
  }

  componentDidUpdate(prevProps) {
    const { filter, refreshUsers } = this.props;
    const { paging } = this.state;

    if (!_.isEqual(filter, prevProps.filter)) {
      paging.offset = 0;
      refreshUsers({ paging, filter });
      this.setState({ paging });
    }
  }

  refresh() {
    const { isRefreshing, refreshUsers, isLoading, filter } = this.props;
    const { paging } = this.state;

    if (!isRefreshing && !isLoading) {
      paging.offset = 0;
      refreshUsers({ paging, filter });
      this.setState({ paging });
    }
  }

  load() {
    const {
      isRefreshing,
      count,
      users,
      isLoading,
      filter,
      getUsers,
    } = this.props;
    const { paging } = this.state;

    if (users.length < count && !isLoading && !isRefreshing) {
      paging.offset += paging.limit;
      getUsers({ paging, filter });
      this.setState({ paging });
    }
  }

  renderItem(item) {
    const { onPress } = this.props;

    return (
      <UsersItem onPress={() => onPress(item)} key={item.id} user={item} />
    );
  }

  render() {
    const { style, users, isRefreshing } = this.props;

    return (
      <Container style={style}>
        <List
          showsVerticalScrollIndicator={false}
          refreshing={isRefreshing}
          onRefresh={this.refresh}
          data={users}
          ListHeaderComponent={() => <Separator />} 
          ItemSeparatorComponent={() => <Separator />}
          ListFooterComponent={() => <Footer />}
          onEndReached={this.load}
          onEndReachedThreshold={0}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => this.renderItem(item)}
        />
      </Container>
    );
  }
}

Users.propTypes = {
  onPress: PropTypes.func,
  isLoading: PropTypes.bool.isRequired,
  isRefreshing: PropTypes.bool.isRequired,
  style: ViewPropTypes.style,
  count: PropTypes.number.isRequired,
  getUsers: PropTypes.func.isRequired,
  refreshUsers: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(SharedTypes.UserType).isRequired,
  filter: SharedTypes.AccountUsersFilter.isRequired,
};

Users.defaultProps = {
  style: {},
  onPress: () => {},
};

function mapStateToProps(state) {
  const {
    users: { users, isLoading, count, isRefreshing },
  } = state;
  return { users, isLoading, count, isRefreshing };
}

export default connect(
  mapStateToProps,
  {
    getUsers: actions.getUsers,
    refreshUsers: actions.refreshUsers,
  },
)(Users);
