import styled from 'styled-components';
import Avatar from '../Avatar';

const Container = styled.View`
  width: 100%;
  flex-direction: row;
  padding-left: 25px;
`;

const UserAvatar = styled(Avatar)`
  left: -5px;
  margin-left: ${props => (props.index === 0 ? 0 : -15)}px;
`;

export { Container, UserAvatar };
