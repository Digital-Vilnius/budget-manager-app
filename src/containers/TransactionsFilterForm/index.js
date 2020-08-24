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

class TransactionsFilterForm extends Form {
  constructor(props) {
    super(props);

    this.state = {
      fields: {
        amountFrom: { value: null, error: null, dirty: false },
        amountTo: { value: null, error: null, dirty: false },
        dateFrom: { value: null, error: null, dirty: false },
        dateTo: { value: null, error: null, dirty: false },
      },
    };

    autoBind(this);
  }

  componentDidMount() {
    const { formData } = this.props;
    formData ? this.setForm(formData) : this.validateForm();
  }

  setForm({ amountFrom, amountTo, dateFrom, dateTo }) {
    this.setState(
      state =>
        update(state, {
          fields: {
            amountFrom: { value: { $set: amountFrom } },
            amountTo: { value: { $set: amountTo } },
            dateFrom: { value: { $set: dateFrom } },
            dateTo: { value: { $set: dateTo } },
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
        amountFrom: Number(fields.amountFrom.value),
        amountTo: Number(fields.amountTo.value),
        dateFrom: fields.dateFrom.value,
        dateTo: fields.dateTo.value,
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

TransactionsFilterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  style: ViewPropTypes.style,
  formData: PropTypes.shape({
    amountFrom: PropTypes.number.isRequired,
    amountTo: PropTypes.number.isRequired,
    dateFrom: PropTypes.string.isRequired,
    dateTo: PropTypes.string.isRequired,
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
