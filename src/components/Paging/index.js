import React from 'react';
import PropTypes from 'prop-types';
import { Container, Page } from './styles';
import { COLORS } from 'styles';
import _ from 'lodash';
import { ViewPropTypes } from 'react-native';

function Paging(props) {
  const { pagesCount, style, currentPage } = props;
  return (
    <Container style={style}>
      {_.range(pagesCount).map(page => (
        <Page active={currentPage === page} key={page} />
      ))}
    </Container>
  );
}

Paging.propTypes = {
  currentPage: PropTypes.number.isRequired,
  pagesCount: PropTypes.number.isRequired,
  style: ViewPropTypes.style,
};

Paging.defaultProps = {
  color: COLORS.DARK_BLUE,
  style: {},
};

export default Paging;
