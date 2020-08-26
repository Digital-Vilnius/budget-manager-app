import React from 'react';
import { Container } from './styles';
import PropTypes from 'prop-types';
import { NAVIGATORS } from 'constants';
import { AccountSelect } from 'containers';
import { Title } from 'components';
import { COLORS, Grid } from 'styles';

function AccountSelectScreen(props) {
  const { navigation } = props;

  const selectCallback = () => {
    navigation.reset({
      routes: [{ name: NAVIGATORS.MAIN }],
    });
  };

  return (
    <Container>
      <Grid.Row mt={15} mb={25} center>
        <Title color={COLORS.DARK_BLUE} text="Select account" />
      </Grid.Row>
      <AccountSelect selectCallback={selectCallback} />
    </Container>
  );
}

AccountSelectScreen.propTypes = {
  navigation: PropTypes.shape({
    reset: PropTypes.func.isRequired,
  }).isRequired,
};

export default AccountSelectScreen;
