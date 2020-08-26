import React from 'react';
import Form from '../Form';
import autoBind from 'auto-bind';
import { Button, Input } from 'components';
import { Container, Footer } from './styles';
import * as PropTypes from 'prop-types';
import { ViewPropTypes } from 'react-native';
import { Grid } from 'styles';
import { Validations } from 'utils';

class RegistrationForm extends Form {
  validations = {
    fullName: value => Validations.notEmpty(value, 'Full name is required'),
    email: value => Validations.notEmpty(value, 'Email is required'),
    password: value => Validations.notEmpty(value, 'Password is required'),
  };

  constructor(props) {
    super(props);

    this.state = {
      fields: {
        fullName: { value: null, error: null, dirty: false },
        email: { value: null, error: null, dirty: false },
        password: { value: null, error: null, dirty: false },
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
        fullName: fields.fullName.value,
        email: fields.email.value,
        password: fields.password.value,
      });
    }
  }

  render() {
    const { fields } = this.state;
    const { style, isLoading } = this.props;

    return (
      <Container style={style}>
        <Grid.Row>
          <Input
            placeholder="Enter your full name"
            label="Full name"
            value={fields.fullName.value}
            onBlur={this.handleBlur}
            onChange={this.handleChange}
            name="fullName"
          />
        </Grid.Row>
        <Grid.Row>
          <Input
            placeholder="Enter your email"
            label="Email"
            value={fields.email.value}
            onBlur={this.handleBlur}
            onChange={this.handleChange}
            name="email"
          />
        </Grid.Row>
        <Grid.Row>
          <Input
            placeholder="Enter your password"
            label="Password"
            secureTextEntry
            value={fields.password.value}
            onBlur={this.handleBlur}
            onChange={this.handleChange}
            name="password"
          />
        </Grid.Row>
        <Footer>
          <Grid.Row>
            <Button
              isLoading={isLoading}
              disabled={this.hasErrors()}
              title="Register"
              onPress={this.submit}
            />
          </Grid.Row>
        </Footer>
      </Container>
    );
  }
}

RegistrationForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  style: ViewPropTypes.style,
};

RegistrationForm.defaultProps = {
  style: {},
  isLoading: false,
};

export default RegistrationForm;
