import React, { useState } from 'react';
import { ViewPropTypes } from 'react-native';
import * as PropTypes from 'prop-types';
import _ from 'lodash';
import { Modal } from 'components';
import { Form } from 'styles';
import { UsersService } from 'services';
import { connect } from 'react-redux';
import { SharedTypes } from 'utils';
import Users from '../Users';

function UserSelect(props) {
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
      const fullName = UsersService.findUserById(value)?.fullName;
      return <Form.Value>{fullName}</Form.Value>;
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
        title="Select user"
        visible={visible}>
        <Users
          filter={{ accountId: selectedAccount.id }}
          onPress={selectItem}
        />
      </Modal>
    </Form.Container>
  );
}

UserSelect.propTypes = {
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

UserSelect.defaultProps = {
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

export default connect(mapStateToProps)(UserSelect);
