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

class CategoryForm extends Form {
  constructor(props) {
    super(props);

    this.state = {
      fields: {
        title: { value: null, error: null, dirty: false },
        plannedBudget: { value: null, error: null, dirty: false },
        description: { value: null, error: null, dirty: false },
      },
    };

    autoBind(this);
  }

  componentDidMount() {
    this.validateForm();
  }

  componentDidUpdate(prevProps) {
    const { formData } = this.props;
    if (!_.isEqual(prevProps.formData, formData) && formData) {
      this.setForm(formData);
    }
  }

  setForm({ title, description, plannedBudget }) {
    this.setState(
      state =>
        update(state, {
          fields: {
            title: { value: { $set: title } },
            plannedBudget: { value: { $set: plannedBudget } },
            description: { value: { $set: description } },
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
        title: fields.title.value,
        plannedBudget: fields.plannedBudget.value,
        description: fields.description.value,
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
            value={fields.title.value}
            onChange={this.handleChange}
            placeholder="Enter category title"
            label="Title"
            name="title"
          />
          <Input
            value={fields.plannedBudget.value}
            onChange={this.handleChange}
            placeholder="Enter category planned budget"
            label="Planned budget"
            name="plannedBudget"
          />
          <Input
            value={fields.description.value}
            onChange={this.handleChange}
            placeholder="Enter category description"
            label="Description"
            name="description"
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

CategoryForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func,
  style: ViewPropTypes.style,
  formData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
  isLoading: PropTypes.bool,
};

CategoryForm.defaultProps = {
  style: {},
  onCancel: () => {},
  isLoading: false,
  formData: null,
};

export default CategoryForm;
