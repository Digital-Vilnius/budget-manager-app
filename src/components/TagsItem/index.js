import React from 'react';
import { Container, Description, Title } from './styles';
import { ViewPropTypes } from 'react-native';
import { SharedTypes } from 'core/utils';
import PropTypes from 'prop-types';
import Avatar from '../Avatar';
import { Grid } from 'styles';
import ProgressBar from '../ProgressBar';

function TagsItem(props) {
  const { tag, style, onPress, onLongPress } = props;
  const { description, title, total, plannedBudget } = tag;

  const formattedTotal = `${total.toFixed(2)} $`;
  const formattedPlannedBudget = `${plannedBudget.toFixed(2)} $`;

  return (
    <Container
      disabled
      onLongPress={onLongPress}
      onPress={onPress}
      style={style}>
      <Grid.Row mb={15}>
        <Grid.Col mr={10}>
          <Avatar placeholder={title.substring(0, 2)} size={40} />
        </Grid.Col>
        <Grid.Col>
          <Title>{title}</Title>
          <Description numberOfLines={1}>{description}</Description>
        </Grid.Col>
      </Grid.Row>
      <Grid.Row mb={5} spaceBetween>
        <Grid.Col>
          <Description>{formattedTotal}</Description>
        </Grid.Col>
        <Grid.Col>
          <Description>{formattedPlannedBudget}</Description>
        </Grid.Col>
      </Grid.Row>
      <Grid.Row>
        <ProgressBar progress={(total / plannedBudget) * 100} />
      </Grid.Row>
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
