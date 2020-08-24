import React from 'react';
import PropTypes from 'prop-types';
import { Container, Footer, List } from './styles';
import { SharedTypes } from 'utils';
import { ViewPropTypes } from 'react-native';
import { CategoriesItem, Separator } from 'components';
import { connect } from 'react-redux';
import { categories as actions } from 'actions';
import { LIST } from 'constants';
import autoBind from 'auto-bind';
import _ from 'lodash';

class Categories extends React.Component {
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
    const { refreshCategories, filter } = this.props;
    const { paging } = this.state;
    refreshCategories({ paging, filter });
  }

  componentDidUpdate(prevProps) {
    const { filter, refreshCategories } = this.props;
    const { paging } = this.state;

    if (!_.isEqual(filter, prevProps.filter)) {
      paging.offset = 0;
      refreshCategories({ paging, filter });
      this.setState({ paging });
    }
  }

  refresh() {
    const { isRefreshing, refreshCategories, isLoading, filter } = this.props;
    const { paging } = this.state;

    if (!isRefreshing && !isLoading) {
      paging.offset = 0;
      refreshCategories({ paging, filter });
      this.setState({ paging });
    }
  }

  load() {
    const {
      isRefreshing,
      count,
      categories,
      isLoading,
      filter,
      getCategories,
    } = this.props;
    const { paging } = this.state;

    if (categories.length < count && !isLoading && !isRefreshing) {
      paging.offset += paging.limit;
      getCategories({ paging, filter });
      this.setState({ paging });
    }
  }

  renderItem(item) {
    const { onPress, onLongPress } = this.props;

    return (
      <CategoriesItem
        onLongPress={() => onLongPress(item)}
        onPress={() => onPress(item)}
        key={item.id}
        category={item}
      />
    );
  }

  render() {
    const { style, categories, isRefreshing } = this.props;

    return (
      <Container style={style}>
        <List
          showsVerticalScrollIndicator={false}
          refreshing={isRefreshing}
          onRefresh={this.refresh}
          data={categories}
          ItemSeparatorComponent={() => <Separator />}
          ListHeaderComponent={() => <Separator />}
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

Categories.propTypes = {
  onLongPress: PropTypes.func,
  onPress: PropTypes.func,
  isLoading: PropTypes.bool.isRequired,
  isRefreshing: PropTypes.bool.isRequired,
  style: ViewPropTypes.style,
  count: PropTypes.number.isRequired,
  getCategories: PropTypes.func.isRequired,
  refreshCategories: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(SharedTypes.CategoryType).isRequired,
  filter: SharedTypes.CategoriesFilter.isRequired,
};

Categories.defaultProps = {
  style: {},
  onPress: () => {},
  onLongPress: () => {},
};

function mapStateToProps(state) {
  const {
    categories: { categories, count, isLoading, isRefreshing },
  } = state;
  return { categories, isLoading, count, isRefreshing };
}

export default connect(
  mapStateToProps,
  {
    getCategories: actions.getCategories,
    refreshCategories: actions.refreshCategories,
  },
)(Categories);
