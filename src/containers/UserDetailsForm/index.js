import React from 'react';
import Form from '../Form';
import autoBind from 'auto-bind';
import { Button, Input } from 'components';
import { Container, Content, Footer } from './styles';
import update from 'immutability-helper';
import * as PropTypes from 'prop-types';
import { ViewPropTypes } from 'react-native';
import _ from 'lodash';
import { BUTTONS, Grid } from 'styles';

class UserDetailsForm extends Form {
  constructor(props) {
    super(props);

    this.state = {
      fields: {
        email: { value: null, error: null, dirty: false },
        fullName: { value: null, error: null, dirty: false },
      },
    };

    autoBind(this);
  }

  componentDidMount() {
    const { formData } = this.props;
    if (formData) {
      this.setForm(formData);
    } else {
      this.validateForm();
    }
  }

  componentDidUpdate(prevProps) {
    const { formData } = this.props;
    if (!_.isEqual(prevProps.formData, formData) && formData) {
      this.setForm(formData);
    }
  }

  setForm({ email, fullName }) {
    this.setState(
      state =>
        update(state, {
          fields: {
            email: { value: { $set: email } },
            fullName: { value: { $set: fullName } },
          },
        }),
      () => this.validateForm(),
    );
  }

  save() {
    const { fields } = this.state;
    const { onSubmit } = this.props;

    if (this.validateForm()) {
      onSubmit({
        email: fields.email.value,
        fullName: fields.fullName.value,
      });
    }
  }

  render() {
    const { fields } = this.state;
    const { style, isLoading, onCancel } = this.props;

    return (
      <Container style={style}>
        <Content>
          <Input
            value={fields.email.value}
            onChange={this.handleChange}
            placeholder="Enter your email"
            label="Email"
            name="email"
          />
          <Input
            value={fields.fullName.value}
            onChange={this.handleChange}
            placeholder="Enter your full name"
            label="Full name"
            name="fullName"
          />
        </Content>
        <Footer>
          <Grid.Row mb={10}>
            <Button
              disabled={this.hasErrors()}
              title="Save"
              isLoading={isLoading}
              onPress={this.save}
            />
          </Grid.Row>
          <Grid.Row>
            <Button
              type={BUTTONS.SECONDARY}
              outline
              title="Cancel"
              onPress={onCancel}
            />
          </Grid.Row>
        </Footer>
      </Container>
    );
  }
}

UserDetailsForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func,
  style: ViewPropTypes.style,
  formData: PropTypes.shape({
    email: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
  }),
  isLoading: PropTypes.bool,
};

UserDetailsForm.defaultProps = {
  style: {},
  onCancel: () => {},
  isLoading: false,
  formData: null,
};

export default UserDetailsForm;
