import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';
import { SharedTypes } from 'core/utils';
import { ViewPropTypes } from 'react-native';
import { List, TagsItem } from 'components';
import { connect } from 'react-redux';
import { TagsActions } from 'core/actions';

function Tags(props) {
  const {
    style,
    tags,
    isRefreshing,
    count,
    getTags,
    refreshTags,
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
        getFunction={getTags}
        isRefreshing={isRefreshing}
        refreshFunction={refreshTags}
        data={tags}
        renderItem={renderItem}
      />
    </Container>
  );
}

Tags.propTypes = {
  renderItem: PropTypes.func,
  isLoading: PropTypes.bool.isRequired,
  isRefreshing: PropTypes.bool.isRequired,
  style: ViewPropTypes.style,
  count: PropTypes.number.isRequired,
  getTags: PropTypes.func.isRequired,
  refreshTags: PropTypes.func.isRequired,
  tags: PropTypes.arrayOf(SharedTypes.TagType).isRequired,
  filter: SharedTypes.TagsFilter,
};

Tags.defaultProps = {
  style: {},
  renderItem: item => <TagsItem key={item.id} tag={item} />,
};

function mapStateToProps(state) {
  const { tags } = state;
  const { count, isLoading, isRefreshing } = tags;
  return { tags: tags.tags, isLoading, count, isRefreshing };
}

const mapDispatchToProps = {
  getTags: TagsActions.getTags,
  refreshTags: TagsActions.refreshTags,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Tags);
