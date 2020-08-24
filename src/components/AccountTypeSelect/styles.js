import styled from 'styled-components';
import { Typography, COLORS } from 'styles';

const Container = styled.View`
  width: 100%;
`;

const ItemText = styled(Typography.RegularText)`
  font-size: 14px;
  line-height: 16px;
  color: ${props => (props.active ? COLORS.PRIMARY : COLORS.DARK_BLUE)};
  text-transform: capitalize;
`;

const Item = styled.TouchableOpacity`
  width: 100%;
  height: 60px;
  align-items: center;
  justify-content: center;
  border: 1px solid
    ${props => (props.active ? COLORS.PRIMARY : COLORS.LIGHT_GREY)};
`;

export { ItemText, Item, Container };
