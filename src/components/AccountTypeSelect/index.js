import React from 'react';
import PropTypes from 'prop-types';
import { Container, Item, ItemText } from './styles';
import { ViewPropTypes } from 'react-native';
import { SPACE_TYPES } from 'constants';
import { Grid } from 'styles';

function AccountTypeSelect(props) {
  const { style, onChange, value, name } = props;
  const accountTypes = Object.keys(SPACE_TYPES);

  return (
    <Container style={style}>
      {accountTypes.map((type, index) => (
        <Grid.Row key={type} mb={index === accountTypes.length - 1 ? 0 : 10}>
          <Item
            active={type === value}
            onPress={() => onChange({ name, value: type })}>
            <ItemText active={type === value}>{type}</ItemText>
          </Item>
        </Grid.Row>
      ))}
    </Container>
  );
}

AccountTypeSelect.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  style: ViewPropTypes.style,
};

AccountTypeSelect.defaultProps = {
  style: {},
  value: SPACE_TYPES.PLANNER,
};

export default AccountTypeSelect;
