import React from 'react';
import Form from '../Form';
import autoBind from 'auto-bind';
import { AccountTypeSelect, Button, Title } from 'components';
import { Container, Footer } from './styles';
import * as PropTypes from 'prop-types';
import { ViewPropTypes } from 'react-native';
import { Grid } from 'styles';
import { Validations } from 'utils';
import { SPACE_TYPES } from 'constants';

class AccountTypeForm extends Form {
  validations = {
    type: value => Validations.notEmpty(value, 'Type is required'),
  };

  constructor(props) {
    super(props);

    this.state = {
      fields: {
        type: { value: SPACE_TYPES.PLANNER, error: null, dirty: false },
      },
    };

    autoBind(this);
  }

  componentDidMount() {
    this.validateForm();
  }

  submit() {
    const { fields } = this.state;
    const { onSubmit } = this.props;

    if (this.validateForm()) {
      onSubmit({
        type: fields.type.value,
      });
    }
  }

  render() {
    const { fields } = this.state;
    const { style, onBack } = this.props;

    return (
      <Container style={style}>
        <Grid.Row mb={25} center>
          <Title text="Select account type" />
        </Grid.Row>
        <Grid.Row mb={25}>
          <AccountTypeSelect
            name="type"
            value={fields.type.value}
            onChange={this.handleChange}
          />
        </Grid.Row>
        <Footer>
          <Grid.Row mb={10}>
            <Button
              disabled={this.hasErrors()}
              title="Next"
              onPress={this.submit}
            />
          </Grid.Row>
          <Grid.Row>
            <Button outline title="Back" onPress={onBack} />
          </Grid.Row>
        </Footer>
      </Container>
    );
  }
}

AccountTypeForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
  style: ViewPropTypes.style,
};

AccountTypeForm.defaultProps = {
  style: {},
};

export default AccountTypeForm;
