import React, { useState } from 'react';
import { ViewPropTypes } from 'react-native';
import * as PropTypes from 'prop-types';
import { Icon, Modal } from 'components';
import { Container, Value, ValueContainer } from './styles';
import { COLORS } from 'styles';
import { AccountsService } from 'services';
import Accounts from '../Accounts';

function AccountSelect(props) {
  const { style, disabled, value, onChange, name } = props;
  const [visible, setVisible] = useState(false);

  const selectItem = item => {
    setVisible(false);
    onChange({ name, value: item });
  };

  const selectedAccount = AccountsService.findAccountById(value);

  return (
    <Container
      onPress={() => setVisible(true)}
      disabled={disabled}
      style={style}>
      <ValueContainer>
        <Value>{selectedAccount?.title}</Value>
        <Icon disabled size={18} color={COLORS.GREY} name="arrow-down" />
      </ValueContainer>
      <Modal
        onClose={() => setVisible(false)}
        title="Select account"
        visible={visible}>
        <Accounts onPress={selectItem} />
      </Modal>
    </Container>
  );
}

AccountSelect.propTypes = {
  value: PropTypes.number,
  style: ViewPropTypes.style,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

AccountSelect.defaultProps = {
  style: {},
  value: null,
  disabled: false,
};

export default AccountSelect;
