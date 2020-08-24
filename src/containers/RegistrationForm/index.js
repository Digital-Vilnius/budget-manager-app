import React from 'react';
import Form from '../Form';
import autoBind from 'auto-bind';
import { Button, Input, Title } from 'components';
import { Container, Footer } from './styles';
import * as PropTypes from 'prop-types';
import { ViewPropTypes } from 'react-native';
import { Grid } from 'styles';
import { Validations } from 'utils';

class RegistrationForm extends Form {
  validations = {
    title: value => Validations.notEmpty(value, 'Title is required'),
    fullName: value => Validations.notEmpty(value, 'Full name is required'),
    email: value => Validations.notEmpty(value, 'Email is required'),
    password: value => Validations.notEmpty(value, 'Password is required'),
  };

  constructor(props) {
    super(props);

    this.state = {
      fields: {
        title: { value: null, error: null, dirty: false },
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
        title: fields.title.value,
        fullName: fields.fullName.value,
        email: fields.email.value,
        password: fields.password.value,
      });
    }
  }

  render() {
    const { fields } = this.state;
    const { style, isLoading, onBack } = this.props;

    return (
      <Container style={style}>
        <Grid.Row mb={25} center>
          <Title text="Account details" />
        </Grid.Row>
        <Grid.Row>
          <Input
            placeholder="Enter company title"
            label="Title"
            value={fields.title.value}
            onBlur={this.handleBlur}
            onChange={this.handleChange}
            name="title"
          />
        </Grid.Row>
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
        <Grid.Row mb={15}>
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
          <Grid.Row mb={10}>
            <Button
              isLoading={isLoading}
              disabled={this.hasErrors()}
              title="Register"
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

RegistrationForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  style: ViewPropTypes.style,
};

RegistrationForm.defaultProps = {
  style: {},
  isLoading: false,
};

export default RegistrationForm;
