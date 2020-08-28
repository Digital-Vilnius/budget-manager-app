import React from 'react';
import Form from '../Form';
import autoBind from 'auto-bind';
import { Button, Input, RoleSelect } from 'components';
import { Container, Content, Footer } from './styles';
import * as PropTypes from 'prop-types';
import { ViewPropTypes } from 'react-native';
import { BUTTONS, Grid } from 'styles';

class InvitationForm extends Form {
  constructor(props) {
    super(props);

    this.state = {
      fields: {
        email: { value: null, error: null, dirty: false },
        role: { value: null, error: null, dirty: false },
      },
    };

    autoBind(this);
  }

  componentDidMount() {
    this.validateForm();
  }

  save() {
    const { fields } = this.state;
    const { onSubmit } = this.props;

    if (this.validateForm()) {
      onSubmit({
        email: fields.email.value,
        role: fields.role.value,
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
            placeholder="Enter user email"
            label="Email"
            name="email"
          />
          <RoleSelect
            value={fields.role.value}
            onChange={this.handleChange}
            placeholder="Enter user role"
            label="Role"
            name="role"
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

InvitationForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func,
  style: ViewPropTypes.style,
  isLoading: PropTypes.bool,
};

InvitationForm.defaultProps = {
  style: {},
  onCancel: () => {},
  isLoading: false,
};

export default InvitationForm;
