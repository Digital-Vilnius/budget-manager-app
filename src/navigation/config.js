import React from 'react';
import { COLORS, Grid } from 'styles';
import { IconButton, Title } from 'components';

const DRAWER_HEADER_OPTIONS = ({ navigation }) => {
  return {
    headerTitle: ({ children }) => {
      return <Title text={children} />;
    },
    headerTitleAlign: 'center',
    headerLeftContainerStyle: {
      paddingLeft: 10,
    },
    headerRightContainerStyle: {
      paddingRight: 10,
    },
    headerStyle: {
      height: 100,
      shadowOpacity: 0,
      elevation: 0,
      borderBottomColor: COLORS.LIGHT_BORDER,
      borderBottomWidth: 1,
      backgroundColor: COLORS.PRIMARY,
    },
    headerLeft: ({ goBack, canGoBack }) => {
      return (
        <Grid.Row>
          {canGoBack && (
            <Grid.Col mr={10}>
              <IconButton onPress={goBack} icon="arrow-round-back" />
            </Grid.Col>
          )}
          {!canGoBack && (
            <Grid.Col mr={10}>
              <IconButton
                onPress={navigation.toggleDrawer}
                iconSize={26}
                icon="menu"
              />
            </Grid.Col>
          )}
        </Grid.Row>
      );
    },
  };
};

export { DRAWER_HEADER_OPTIONS };
