import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';
import { SharedTypes } from 'utils';
import { ViewPropTypes } from 'react-native';
import { List } from 'components';
import { connect } from 'react-redux';
import { tags as actions } from 'actions';

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
};

function mapStateToProps(state) {
  const { tags } = state;
  const { count, isLoading, isRefreshing } = tags;
  return { tags: tags.tags, isLoading, count, isRefreshing };
}

const mapDispatchToProps = {
  getTags: actions.getTags,
  refreshTags: actions.refreshTags,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Tags);
