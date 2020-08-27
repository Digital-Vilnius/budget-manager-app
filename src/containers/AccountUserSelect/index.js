import React, { useState } from 'react';
import { Footer } from './styles';
import { Button, Modal, OptionsItem } from 'components';
import PropTypes from 'prop-types';
import {BUTTONS, Form, Grid} from 'styles';
import { ViewPropTypes } from 'react-native';
import { AccountUsersService } from 'services';
import AccountUsers from '../AccountUsers';

function AccountUserSelect(props) {
  const { onChange, value, name, style, disabled, label, placeholder } = props;
  const [visible, setVisible] = useState(false);
  const [accountUser, setAccountUser] = useState(value);

  const select = () => {
    setVisible(false);
    onChange({ name, value: accountUser.id });
  };

  const renderItem = item => (
    <OptionsItem
      selected={item.id === accountUser?.id}
      description={item.email}
      onPress={() => setAccountUser(item.id === accountUser?.id ? null : item)}
      key={item.id}
      title={item.fullName}
    />
  );

  const renderValue = () => {
    if (value) {
      const fullName = AccountUsersService.findAccountUserById(value)?.fullName;
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
        <AccountUsers renderItem={renderItem} />
        <Footer>
          <Grid.Row mb={10} center>
            <Button disabled={!accountUser} onPress={select} title="Select" />
          </Grid.Row>
          <Grid.Row>
            <Button
              type={BUTTONS.SECONDARY}
              outline
              title="Cancel"
              onPress={() => setVisible(false)}
            />
          </Grid.Row>
        </Footer>
      </Modal>
    </Form.Container>
  );
}

AccountUserSelect.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string.isRequired,
  style: ViewPropTypes.style,
  disabled: PropTypes.bool,
  value: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

AccountUserSelect.defaultProps = {
  style: {},
  value: null,
  placeholder: null,
  disabled: false,
};

export default AccountUserSelect;
