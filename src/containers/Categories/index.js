import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';
import { SharedTypes } from 'utils';
import { ViewPropTypes } from 'react-native';
import { CategoriesItem, List } from 'components';
import { connect } from 'react-redux';
import { CategoriesActions } from 'actions';

function Categories(props) {
  const {
    style,
    categories,
    isRefreshing,
    count,
    getCategories,
    refreshCategories,
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
        getFunction={getCategories}
        isRefreshing={isRefreshing}
        refreshFunction={refreshCategories}
        data={categories}
        renderItem={renderItem}
      />
    </Container>
  );
}

Categories.propTypes = {
  renderItem: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isRefreshing: PropTypes.bool.isRequired,
  style: ViewPropTypes.style,
  count: PropTypes.number.isRequired,
  getCategories: PropTypes.func.isRequired,
  refreshCategories: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(SharedTypes.CategoryType).isRequired,
  filter: SharedTypes.CategoriesFilter,
};

Categories.defaultProps = {
  style: {},
  renderItem: item => <CategoriesItem key={item.id} category={item} />,
};

function mapStateToProps(state) {
  const { categories } = state;
  const { count, isLoading, isRefreshing } = categories;
  return { categories: categories.categories, isLoading, count, isRefreshing };
}

const mapDispatchToProps = {
  getCategories: CategoriesActions.getCategories,
  refreshCategories: CategoriesActions.refreshCategories,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Categories);
