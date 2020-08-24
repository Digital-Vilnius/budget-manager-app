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

function TagsItem(props) {
  const { tag, style, onPress, onLongPress } = props;
  const { description, title, total } = tag;

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
        <AmountText>{`${total.toFixed(2)} €`}</AmountText>
      </RightSection>
    </Container>
  );
}

TagsItem.propTypes = {
  tag: SharedTypes.TagType.isRequired,
  style: ViewPropTypes.style,
  onPress: PropTypes.func,
  onLongPress: PropTypes.func,
};

TagsItem.defaultProps = {
  style: {},
  onPress: () => {},
  onLongPress: () => {},
};

export default TagsItem;
