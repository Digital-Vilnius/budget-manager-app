import React from 'react';
import PropTypes from 'prop-types';
import { Container, Footer, List, Separator } from './styles';
import { Mapper, SharedTypes } from 'core/utils';
import { ViewPropTypes } from 'react-native';
import { SectionHeader, TransactionsItem } from 'components';
import { connect } from 'react-redux';
import { TransactionsActions } from 'core/actions';
import { LIST } from 'core/constants';
import autoBind from 'auto-bind';
import _ from 'lodash';

class Transactions extends React.Component {
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
    const { refreshTransactions, filter } = this.props;
    const { paging } = this.state;
    refreshTransactions({ paging, filter });
  }

  componentDidUpdate(prevProps) {
    const { filter, refreshTransactions } = this.props;
    const { paging } = this.state;

    if (!_.isEqual(filter, prevProps.filter)) {
      paging.offset = 0;
      refreshTransactions({ paging, filter });
      this.setState({ paging });
    }
  }

  refresh() {
    const { isRefreshing, refreshTransactions, isLoading, filter } = this.props;
    const { paging } = this.state;

    if (!isRefreshing && !isLoading) {
      paging.offset = 0;
      refreshTransactions({ paging, filter });
      this.setState({ paging });
    }
  }

  load() {
    const {
      isRefreshing,
      count,
      transactions,
      isLoading,
      filter,
      getTransactions,
    } = this.props;
    const { paging } = this.state;

    if (transactions.length < count && !isLoading && !isRefreshing) {
      paging.offset += paging.limit;
      getTransactions({ paging, filter });
      this.setState({ paging });
    }
  }

  renderItem(item) {
    const { onPress, onLongPress } = this.props;

    return (
      <TransactionsItem
        onPress={() => onPress(item)}
        onLongPress={() => onLongPress(item)}
        key={item.id}
        transaction={item}
      />
    );
  }

  render() {
    const { style, transactions, isRefreshing } = this.props;

    return (
      <Container style={style}>
        <List
          showsVerticalScrollIndicator={false}
          refreshing={isRefreshing}
          onRefresh={this.refresh}
          sections={Mapper.transformArrayToSections(transactions, 'date')}
          ItemSeparatorComponent={() => <Separator />}
          ListFooterComponent={() => <Footer />}
          onEndReached={this.load}
          onEndReachedThreshold={0}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => this.renderItem(item)}
          renderSectionHeader={({ section: { title } }) => (
            <SectionHeader title={title} />
          )}
        />
      </Container>
    );
  }
}

Transactions.propTypes = {
  onPress: PropTypes.func,
  onLongPress: PropTypes.func,
  isLoading: PropTypes.bool.isRequired,
  isRefreshing: PropTypes.bool.isRequired,
  style: ViewPropTypes.style,
  getTransactions: PropTypes.func.isRequired,
  refreshTransactions: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
  transactions: PropTypes.arrayOf(SharedTypes.TransactionType).isRequired,
  filter: SharedTypes.TransactionsFilter.isRequired,
};

Transactions.defaultProps = {
  style: {},
  onPress: () => {},
  onLongPress: () => {},
};

function mapStateToProps(state) {
  const {
    transactions: { transactions, isLoading, count, isRefreshing },
  } = state;
  return { transactions, isLoading, count, isRefreshing };
}

const mapDispatchToProps = {
  getTransactions: TransactionsActions.getTransactions,
  refreshTransactions: TransactionsActions.refreshTransactions,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Transactions);
