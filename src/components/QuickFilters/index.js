import React from 'react';
import { Container, Content } from './styles';
import { Grid } from 'styles';
import PropTypes from 'prop-types';
import { ViewPropTypes } from 'react-native';
import { SharedTypes } from 'utils';
import QuickFilter from '../QuickFilter';

const QUICK_FILTERS = [
  {
    key: 'all',
    label: 'All',
  },
  {
    key: 'expenses',
    label: 'Expenses',
  },
  {
    key: 'incomes',
    label: 'Incomes',
  },
  {
    key: 'today',
    label: 'Today',
  },
  {
    key: 'thisMonth',
    label: 'This month',
  },
];

function QuickFilters(props) {
  const { style, filters } = props;

  return (
    <Container style={style}>
      <Content showsHorizontalScrollIndicator={false} horizontal>
        {QUICK_FILTERS.map((filter, index) => (
          <Grid.Col
            key={filter.key}
            ml={index === 0 ? 10 : 0}
            mr={index === filters.length - 1 ? 10 : 5}>
            <QuickFilter filter={filter} />
          </Grid.Col>
        ))}
      </Content>
    </Container>
  );
}

QuickFilters.propTypes = {
  onChange: PropTypes.func,
  style: ViewPropTypes.style,
  filters: PropTypes.arrayOf(SharedTypes.QuickFilter),
};

QuickFilters.defaultProps = {
  style: {},
  onChange: () => {},
  filters: [],
};

export default QuickFilters;
