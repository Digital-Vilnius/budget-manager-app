import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';
import { SharedTypes } from 'utils';
import { ViewPropTypes } from 'react-native';
import { CategoriesItem, List } from 'components';
import { connect } from 'react-redux';
import { categories as actions } from 'actions';

function Categories(props) {
  const {
    onPress,
    onLongPress,
    style,
    categories,
    isRefreshing,
    count,
    getCategories,
    refreshCategories,
    isLoading,
    filter,
    options,
    selectedCategoriesIds,
  } = props;

  const renderItem = item => (
    <CategoriesItem
      option={options}
      checked={selectedCategoriesIds.includes(item.id)}
      onLongPress={() => onLongPress(item)}
      onPress={() => onPress(item)}
      key={item.id}
      category={item}
    />
  );

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
  options: PropTypes.bool,
  selectedCategoriesIds: PropTypes.arrayOf(PropTypes.number),
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
  options: false,
  selectedCategoriesIds: [],
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
