import React from 'react';
import { Container, Content } from './styles';
import { Grid } from 'styles';
import PropTypes from 'prop-types';
import { ViewPropTypes } from 'react-native';
import { SharedTypes } from 'core/utils';
import QuickFilter from '../QuickFilter';

const currentDate = new Date().toISOString().split('T')[0];

const QUICK_FILTERS = [
  {
    key: 'all',
    label: 'All',
    value: {},
  },
  {
    key: 'expenses',
    label: 'Expenses',
    value: { amountTo: 0 },
  },
  {
    key: 'incomes',
    label: 'Incomes',
    value: { amountFrom: 0 },
  },
  {
    key: 'today',
    label: 'Today',
    value: { dateFrom: currentDate, dateTo: currentDate },
  },
  {
    key: 'thisMonth',
    label: 'This month',
  },
];

function QuickFilters(props) {
  const { style, filter, onChange } = props;

  return (
    <Container style={style}>
      <Content showsHorizontalScrollIndicator={false} horizontal>
        {QUICK_FILTERS.map((quickFilter, index) => (
          <Grid.Col
            key={quickFilter.key}
            ml={index === 0 ? 10 : 0}
            mr={index === QUICK_FILTERS.length - 1 ? 10 : 5}>
            <QuickFilter
              onPress={() => onChange({ ...filter, ...quickFilter.value })}
              filter={quickFilter}
            />
          </Grid.Col>
        ))}
      </Content>
    </Container>
  );
}

QuickFilters.propTypes = {
  onChange: PropTypes.func,
  style: ViewPropTypes.style,
  filter: SharedTypes.TransactionsFilter.isRequired,
};

QuickFilters.defaultProps = {
  style: {},
  onChange: () => {},
  filters: [],
};

export default QuickFilters;
