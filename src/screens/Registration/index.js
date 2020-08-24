import React, { useState } from 'react';
import {
  Content,
  Footer,
  FooterMediumText,
  FooterText,
  Page,
  PagingContainer,
  SafeAreaContainer,
  IntroContainer,
} from './styles';
import { Button, Description, ScreenContainer, Title } from 'components';
import { ACCOUNT_TYPES, SCREENS } from 'constants';
import PropTypes from 'prop-types';
import { AccountTypeForm, RegistrationForm } from 'containers';
import { SCREEN_WIDTH, Grid } from 'styles';
import { connect } from 'react-redux';
import { auth as actions } from 'actions';

function RegistrationScreen(props) {
  const { navigation, registerIndividual, registerFamily, isLoading } = props;
  const [page, setPage] = useState(1);
  const [data, setData] = useState({});
  const [scrollRef, setScrollRef] = useState(1);

  const savePartialData = partialData => {
    setData({ ...data, ...partialData });
    next();
  };

  const next = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    const x = (nextPage - 1) * SCREEN_WIDTH;
    scrollRef.scrollTo({ x, y: 0, animated: true });
  };

  const back = () => {
    const previousPage = page - 1;
    setPage(previousPage);
    const x = (previousPage - 1) * SCREEN_WIDTH;
    scrollRef.scrollTo({ x, y: 0, animated: true });
  };

  const successCallback = () => {
    navigation.navigate(SCREENS.LOGIN);
  };

  const register = partialData => {
    const { type } = data;
    const request = { ...data, ...partialData };

    if (type === ACCOUNT_TYPES.INDIVIDUAL) {
      registerIndividual(request, successCallback);
    }

    if (type === ACCOUNT_TYPES.FAMILY) {
      registerFamily(request, successCallback);
    }
  };

  return (
    <ScreenContainer justifyContent="flex-end">
      <Content>
        <PagingContainer
          showsHorizontalScrollIndicator={false}
          horizontal
          ref={setScrollRef}
          scrollEnabled={false}
          pagingEnabled>
          <Page>
            <IntroContainer>
              <Grid.Row center mb={25}>
                <Title text="Create your account" />
              </Grid.Row>
              <Grid.Row mb={25}>
                <Description
                  center
                  text="I hate peeping Toms. For one thing they usually step all over the hedges and plants on the side of someone’s house killing them "
                />
              </Grid.Row>
              <Grid.Row mb={25}>
                <Button onPress={next} title="Get started" />
              </Grid.Row>
            </IntroContainer>
          </Page>
          <Page>
            <AccountTypeForm onBack={back} onSubmit={savePartialData} />
          </Page>
          <Page>
            <RegistrationForm
              onBack={back}
              isLoading={isLoading}
              onSubmit={register}
            />
          </Page>
        </PagingContainer>
        <SafeAreaContainer>
          <Footer onPress={() => navigation.navigate(SCREENS.LOGIN)}>
            <FooterText>Already have an account?</FooterText>
            <FooterMediumText>Sign in</FooterMediumText>
          </Footer>
        </SafeAreaContainer>
      </Content>
    </ScreenContainer>
  );
}

RegistrationScreen.propTypes = {
  navigation: PropTypes.shape({
    replace: PropTypes.func.isRequired,
  }).isRequired,
  registerIndividual: PropTypes.func.isRequired,
  registerFamily: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  const { auth } = state;
  const { isLoading } = auth;
  return { isLoading };
}

export default connect(
  mapStateToProps,
  {
    registerFamily: actions.registerIndividual,
    registerIndividual: actions.registerIndividual,
  },
)(RegistrationScreen);
