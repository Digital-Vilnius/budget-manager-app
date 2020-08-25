import React from 'react';
import {
  Container,
  Description,
  Details,
  LeftSection,
  Title,
  AmountText,
  RightSection,
} from './styles';
import { ViewPropTypes } from 'react-native';
import { SharedTypes } from 'utils';
import PropTypes from 'prop-types';
import Avatar from '../Avatar';
import Checkbox from '../Checkbox';

function CategoriesItem(props) {
  const { category, style, onPress, onLongPress, option, checked } = props;
  const { description, title, total } = category;

  return (
    <Container onLongPress={onLongPress} onPress={onPress} style={style}>
      <LeftSection>
        <Avatar placeholder={title.substring(0, 2)} size={40} />
        <Details>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </Details>
      </LeftSection>
      <RightSection>
        {option && <Checkbox disabled checked={checked} />}
        {!option && <AmountText>{`${total.toFixed(2)} €`}</AmountText>}
      </RightSection>
    </Container>
  );
}

CategoriesItem.propTypes = {
  category: SharedTypes.CategoryType.isRequired,
  option: PropTypes.bool,
  checked: PropTypes.bool,
  style: ViewPropTypes.style,
  onPress: PropTypes.func,
  onLongPress: PropTypes.func,
};

CategoriesItem.defaultProps = {
  style: {},
  checked: false,
  option: false,
  onPress: () => {},
  onLongPress: () => {},
};

export default CategoriesItem;
