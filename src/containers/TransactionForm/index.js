import React from 'react';
import Form from '../Form';
import autoBind from 'auto-bind';
import { Button, DatePicker, Input } from 'components';
import { Container, Content, Footer } from './styles';
import update from 'immutability-helper';
import * as PropTypes from 'prop-types';
import { ViewPropTypes } from 'react-native';
import CategorySelect from '../CategorySelect';
import { BUTTONS, Grid } from 'styles';
import TagSelect from '../TagSelect';
import AccountUserSelect from '../AccountUserSelect';

class TransactionForm extends Form {
  constructor(props) {
    super(props);

    const currentDate = new Date().toISOString().split('T')[0];

    this.state = {
      fields: {
        amount: { value: null, error: null, dirty: false },
        categoryId: { value: null, error: null, dirty: false },
        tagId: { value: null, error: null, dirty: false },
        spentById: { value: null, error: null, dirty: false },
        date: { value: currentDate, error: null, dirty: false },
        description: { value: null, error: null, dirty: false },
      },
    };

    autoBind(this);
  }

  componentDidMount() {
    const { formData } = this.props;
    formData ? this.setForm(formData) : this.validateForm();
  }

  setForm({ amount, description, date, categoryId, tagId, spentById }) {
    this.setState(
      state =>
        update(state, {
          fields: {
            amount: { value: { $set: amount } },
            categoryId: { value: { $set: categoryId } },
            spentById: { value: { $set: spentById } },
            tagId: { value: { $set: tagId } },
            date: { value: { $set: date } },
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
        amount: Number(fields.amount.value),
        date: fields.date.value,
        spentById: fields.spentById.value,
        categoryId: fields.categoryId.value,
        tagId: fields.tagId.value,
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
          <AccountUserSelect
            value={fields.spentById.value}
            onChange={this.handleChange}
            placeholder="Select user"
            label="Spent by"
            name="spentById"
          />
          <CategorySelect
            value={fields.categoryId.value}
            onChange={this.handleChange}
            placeholder="Select transaction category"
            label="Category"
            name="categoryId"
          />
          <TagSelect
            value={fields.tagId.value}
            onChange={this.handleChange}
            placeholder="Select transaction tag"
            label="Tag"
            name="tagId"
          />
          <Input
            value={fields.amount.value}
            onChange={this.handleChange}
            placeholder="Enter transaction amount"
            label="Amount"
            name="amount"
          />
          <DatePicker
            value={fields.date.value}
            onChange={this.handleChange}
            placeholder="Enter transaction date"
            label="Date"
            name="date"
          />
          <Input
            value={fields.description.value}
            onChange={this.handleChange}
            placeholder="Enter transaction description"
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

TransactionForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  style: ViewPropTypes.style,
  formData: PropTypes.shape({
    amount: PropTypes.number.isRequired,
    categoryId: PropTypes.number.isRequired,
    spentById: PropTypes.number.isRequired,
    tagId: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
  isLoading: PropTypes.bool,
  onCancel: PropTypes.func,
};

TransactionForm.defaultProps = {
  style: {},
  isLoading: false,
  formData: null,
  onCancel: () => {},
};

export default TransactionForm;
