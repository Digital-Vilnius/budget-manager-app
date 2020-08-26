import React from 'react';
import PropTypes from 'prop-types';
import { Container, Footer } from './styles';
import { ViewPropTypes, FlatList } from 'react-native';
import Separator from '../Separator';
import { LIST } from 'constants';
import autoBind from 'auto-bind';
import _ from 'lodash';

class List extends React.Component {
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
    const { refreshFunction, filter } = this.props;
    const { paging } = this.state;
    refreshFunction({ paging, filter });
  }

  componentDidUpdate(prevProps) {
    const { filter, refreshFunction } = this.props;
    const { paging } = this.state;

    if (!_.isEqual(filter, prevProps.filter)) {
      paging.offset = 0;
      refreshFunction({ paging, filter });
      this.setState({ paging });
    }
  }

  refresh() {
    const { isRefreshing, refreshFunction, isLoading, filter } = this.props;
    const { paging } = this.state;

    if (!isRefreshing && !isLoading) {
      paging.offset = 0;
      refreshFunction({ paging, filter });
      this.setState({ paging });
    }
  }

  load() {
    const {
      isRefreshing,
      count,
      data,
      isLoading,
      filter,
      getFunction,
    } = this.props;
    const { paging } = this.state;

    if (data.length < count && !isLoading && !isRefreshing) {
      paging.offset += paging.limit;
      getFunction({ paging, filter });
      this.setState({ paging });
    }
  }

  render() {
    const { style, data, isRefreshing, renderItem } = this.props;

    return (
      <Container style={style}>
        <FlatList
          showsVerticalScrollIndicator={false}
          refreshing={isRefreshing}
          onRefresh={this.refresh}
          data={data}
          ItemSeparatorComponent={() => <Separator />}
          ListHeaderComponent={() => <Separator />}
          ListFooterComponent={() => <Footer />}
          onEndReached={this.load}
          onEndReachedThreshold={0}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => renderItem(item)}
        />
      </Container>
    );
  }
}

List.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isRefreshing: PropTypes.bool.isRequired,
  count: PropTypes.number.isRequired,
  getFunction: PropTypes.func.isRequired,
  refreshFunction: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.any).isRequired,
  renderItem: PropTypes.func.isRequired,
  style: ViewPropTypes.style,
  filter: PropTypes.any,
};

List.defaultProps = {
  style: {},
  filter: {},
};

export default List;
