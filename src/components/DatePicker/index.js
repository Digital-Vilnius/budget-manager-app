import React, { useState } from 'react';
import { ViewPropTypes } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import * as PropTypes from 'prop-types';
import { Form } from 'styles';

function DatePicker(props) {
  const { style, label, disabled, value, onChange, name, placeholder } = props;
  const [visible, setVisible] = useState(false);

  const selectItem = date => {
    setVisible(false);
    const formattedDate = date.toISOString().split('T')[0];
    onChange({ name, value: formattedDate });
  };

  const renderValue = () => {
    if (value) {
      return <Form.Value>{value}</Form.Value>;
    }

    if (placeholder) {
      return <Form.Placeholder>{placeholder}</Form.Placeholder>;
    }

    return null;
  };

  return (
    <Form.Container style={style}>
      <Form.Select disabled={disabled} onPress={() => setVisible(true)}>
        <Form.Label>{label}</Form.Label>
        {renderValue()}
      </Form.Select>
      <DateTimePickerModal
        isVisible={visible}
        mode="date"
        date={new Date(value || null)}
        onConfirm={selectItem}
        onCancel={() => setVisible(false)}
      />
    </Form.Container>
  );
}

DatePicker.propTypes = {
  style: ViewPropTypes.style,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

DatePicker.defaultProps = {
  style: {},
  value: null,
  placeholder: null,
  label: null,
  disabled: false,
  onBlur: () => {},
};

export default DatePicker;
