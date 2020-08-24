import React from 'react';
import PropTypes from 'prop-types';
import { Container, Footer, List } from './styles';
import { SharedTypes } from 'utils';
import { ViewPropTypes } from 'react-native';
import { Separator, TagsItem } from 'components';
import { connect } from 'react-redux';
import { tags as actions } from 'actions';
import { LIST } from 'constants';
import autoBind from 'auto-bind';
import _ from 'lodash';

class Tags extends React.Component {
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
    const { refreshTags, filter } = this.props;
    const { paging } = this.state;
    refreshTags({ paging, filter });
  }

  componentDidUpdate(prevProps) {
    const { filter, refreshTags } = this.props;
    const { paging } = this.state;

    if (!_.isEqual(filter, prevProps.filter)) {
      paging.offset = 0;
      refreshTags({ paging, filter });
      this.setState({ paging });
    }
  }

  refresh() {
    const { isRefreshing, refreshTags, isLoading, filter } = this.props;
    const { paging } = this.state;

    if (!isRefreshing && !isLoading) {
      paging.offset = 0;
      refreshTags({ paging, filter });
      this.setState({ paging });
    }
  }

  load() {
    const {
      isRefreshing,
      count,
      tags,
      isLoading,
      filter,
      getTags,
    } = this.props;
    const { paging } = this.state;

    if (tags.length < count && !isLoading && !isRefreshing) {
      paging.offset += paging.limit;
      getTags({ paging, filter });
      this.setState({ paging });
    }
  }

  renderItem(item) {
    const { onPress, onLongPress } = this.props;

    return (
      <TagsItem
        onLongPress={() => onLongPress(item)}
        onPress={() => onPress(item)}
        key={item.id}
        tag={item}
      />
    );
  }

  render() {
    const { style, tags, isRefreshing } = this.props;

    return (
      <Container style={style}>
        <List
          showsVerticalScrollIndicator={false}
          refreshing={isRefreshing}
          onRefresh={this.refresh}
          data={tags}
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

Tags.propTypes = {
  onLongPress: PropTypes.func,
  onPress: PropTypes.func,
  isLoading: PropTypes.bool.isRequired,
  isRefreshing: PropTypes.bool.isRequired,
  style: ViewPropTypes.style,
  count: PropTypes.number.isRequired,
  getTags: PropTypes.func.isRequired,
  refreshTags: PropTypes.func.isRequired,
  tags: PropTypes.arrayOf(SharedTypes.TagType).isRequired,
  filter: SharedTypes.TagsFilter.isRequired,
};

Tags.defaultProps = {
  style: {},
  onPress: () => {},
  onLongPress: () => {},
};

function mapStateToProps(state) {
  const {
    tags: { tags, count, isLoading, isRefreshing },
  } = state;
  return { tags, isLoading, count, isRefreshing };
}

export default connect(
  mapStateToProps,
  {
    getTags: actions.getTags,
    refreshTags: actions.refreshTags,
  },
)(Tags);
