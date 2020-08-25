import styled from 'styled-components';

const getHorizontalAlignment = ({ center, flexEnd, spaceBetween }) => {
  if (center) {
    return 'center';
  }

  if (spaceBetween) {
    return 'space-between';
  }

  if (flexEnd) {
    return 'flex-end';
  }

  return 'flex-start';
};

const Row = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: ${props => getHorizontalAlignment(props)};
  margin-bottom: ${props => (props.mb ? `${props.mb}px` : '0')};
  margin-top: ${props => (props.mt ? `${props.mt}px` : '0')};
  padding-vertical: ${props => (props.pv ? `${props.pv}px` : '0')};
  padding-horizontal: ${props => (props.ph ? `${props.ph}px` : '0')};
`;

const Col = styled.View`
  flex: ${props => (props.flex ? props.flex : '0 1 auto')};
  margin-right: ${props => (props.mr ? `${props.mr}px` : '0')};
  margin-left: ${props => (props.ml ? `${props.ml}px` : '0')};
`;

export { Row, Col };
