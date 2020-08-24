import React, { useState } from 'react';
import { ViewPropTypes } from 'react-native';
import * as PropTypes from 'prop-types';
import _ from 'lodash';
import { Modal } from 'components';
import { Form } from 'styles';
import { CategoriesService } from 'services';
import Categories from '../Categories';
import { connect } from 'react-redux';
import { SharedTypes } from 'utils';

function CategorySelect(props) {
  const {
    style,
    label,
    disabled,
    value,
    onChange,
    name,
    placeholder,
    selectedAccount,
  } = props;
  const [visible, setVisible] = useState(false);

  const selectItem = ({ id }) => {
    setVisible(false);
    onChange({ name, value: id });
  };

  const renderValue = () => {
    if (value) {
      const title = CategoriesService.findCategoryById(value)?.title;
      return <Form.Value>{title}</Form.Value>;
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
      <Modal
        onClose={() => setVisible(false)}
        title="Select category"
        visible={visible}>
        <Categories
          filter={{ accountId: selectedAccount.id }}
          onPress={selectItem}
        />
      </Modal>
    </Form.Container>
  );
}

CategorySelect.propTypes = {
  value: PropTypes.number,
  style: ViewPropTypes.style,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  selectedAccount: SharedTypes.AccountType.isRequired,
};

CategorySelect.defaultProps = {
  style: {},
  value: null,
  placeholder: null,
  disabled: false,
  onBlur: _.noop,
};

function mapStateToProps(state) {
  const { accounts } = state;
  const { selectedAccount } = accounts;
  return { selectedAccount };
}

export default connect(mapStateToProps)(CategorySelect);
