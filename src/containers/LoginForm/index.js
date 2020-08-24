import React from 'react';
import Form from '../Form';
import autoBind from 'auto-bind';
import { Button, Input, Title } from 'components';
import { Container } from './styles';
import * as PropTypes from 'prop-types';
import { ViewPropTypes } from 'react-native';
import { Grid } from 'styles';
import { Validations } from 'utils';

class LoginForm extends Form {
  validations = {
    email: value => Validations.notEmpty(value, 'Email is required'),
    password: value => Validations.notEmpty(value, 'Password is required'),
  };

  constructor(props) {
    super(props);

    this.state = {
      fields: {
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
        <Grid.Row mb={25} center>
          <Title text="Sign in to your account" />
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
        <Grid.Row mb={25}>
          <Input
            secureTextEntry
            placeholder="Enter your password"
            label="Password"
            value={fields.password.value}
            onBlur={this.handleBlur}
            onChange={this.handleChange}
            name="password"
          />
        </Grid.Row>
        <Grid.Row ph={15} mb={25}>
          <Button
            disabled={this.hasErrors()}
            isLoading={isLoading}
            title="Sign in"
            onPress={this.submit}
          />
        </Grid.Row>
      </Container>
    );
  }
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  style: ViewPropTypes.style,
  isLoading: PropTypes.bool.isRequired,
};

LoginForm.defaultProps = {
  style: {},
};

export default LoginForm;
