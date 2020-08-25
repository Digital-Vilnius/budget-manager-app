import React from 'react';
import Form from '../Form';
import autoBind from 'auto-bind';
import { Button, DatePicker, Input } from 'components';
import { Container, Content, Footer } from './styles';
import update from 'immutability-helper';
import * as PropTypes from 'prop-types';
import { ViewPropTypes } from 'react-native';
import { BUTTONS, Grid } from 'styles';
import _ from 'lodash';
import CategorySelect from 'containers/CategorySelect';

class TransactionsFilterForm extends Form {
  constructor(props) {
    super(props);

    this.state = {
      fields: {
        amountFrom: { value: null, error: null, dirty: false },
        amountTo: { value: null, error: null, dirty: false },
        dateFrom: { value: null, error: null, dirty: false },
        dateTo: { value: null, error: null, dirty: false },
        categoriesIds: { value: [], error: null, dirty: false },
      },
    };

    autoBind(this);
  }

  componentDidMount() {
    const { formData } = this.props;
    formData ? this.setForm(formData) : this.validateForm();
  }

  componentDidUpdate(prevProps) {
    const { formData } = this.props;
    if (!_.isEqual(formData, prevProps.formData)) {
      this.setForm(formData);
    }
  }

  setForm({ amountFrom, amountTo, dateFrom, dateTo, categoriesIds }) {
    this.setState(
      state =>
        update(state, {
          fields: {
            amountFrom: { value: { $set: amountFrom } },
            amountTo: { value: { $set: amountTo } },
            dateFrom: { value: { $set: dateFrom } },
            dateTo: { value: { $set: dateTo } },
            categoriesIds: { value: { $set: categoriesIds } },
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
        amountFrom: Number(fields.amountFrom.value) || null,
        amountTo: Number(fields.amountTo.value) || null,
        dateFrom: fields.dateFrom.value || null,
        dateTo: fields.dateTo.value || null,
        categoriesIds: fields.categoriesIds.value || null,
      });
    }
  }

  reset() {
    const { onSubmit } = this.props;
    onSubmit({});
  }

  render() {
    const { fields } = this.state;
    const { style, isLoading } = this.props;

    return (
      <Container style={style}>
        <Content>
          <Input
            value={fields.amountFrom.value}
            onChange={this.handleChange}
            placeholder="Enter transactions amount from"
            label="Amount from"
            name="amountFrom"
          />
          <Input
            value={fields.amountTo.value}
            onChange={this.handleChange}
            placeholder="Enter transactions amount to"
            label="Amount to"
            name="amountTo"
          />
          <DatePicker
            value={fields.dateFrom.value}
            onChange={this.handleChange}
            placeholder="Enter transactions date from"
            label="Date from"
            name="dateFrom"
          />
          <DatePicker
            value={fields.dateTo.value}
            onChange={this.handleChange}
            placeholder="Enter transactions date to"
            label="Date to"
            name="dateTo"
          />
          <CategorySelect
            multiple
            value={fields.categoriesIds.value}
            onChange={this.handleChange}
            placeholder="Select categories"
            label="Categories"
            name="categoriesIds"
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
              title="Reset"
              onPress={this.reset}
            />
          </Grid.Row>
        </Footer>
      </Container>
    );
  }
}

TransactionsFilterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  style: ViewPropTypes.style,
  formData: PropTypes.shape({
    amountFrom: PropTypes.number,
    amountTo: PropTypes.number,
    dateFrom: PropTypes.string,
    dateTo: PropTypes.string,
  }),
  isLoading: PropTypes.bool,
  onCancel: PropTypes.func,
};

TransactionsFilterForm.defaultProps = {
  style: {},
  isLoading: false,
  formData: null,
  onCancel: () => {},
};

export default TransactionsFilterForm;
