import React, { useState } from 'react';
import { FlatList, ViewPropTypes } from 'react-native';
import * as PropTypes from 'prop-types';
import { BUTTONS, Form, Grid } from 'styles';
import Modal from '../Modal';
import Separator from '../Separator';
import OptionsItem from '../OptionsItem';
import { Footer, ListFooter } from './styles';
import { ROLES } from 'core/constants';
import Button from '../Button';

const Roles = [ROLES.ADMIN, ROLES.USER, ROLES.GUEST];

function RoleSelect(props) {
  const { style, label, disabled, value, onChange, name, placeholder } = props;
  const [visible, setVisible] = useState(false);
  const [role, setRole] = useState(value);

  const selectItem = () => {
    setVisible(false);
    onChange({ name, value: role });
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

  const renderItem = item => (
    <OptionsItem
      description={item}
      selected={item === role}
      onPress={() => setRole(item)}
      key={item}
      title={item}
    />
  );

  return (
    <Form.Container style={style}>
      <Form.Select disabled={disabled} onPress={() => setVisible(true)}>
        <Form.Label>{label}</Form.Label>
        {renderValue()}
      </Form.Select>
      <Modal
        title="Select role"
        visible={visible}
        onClose={() => setVisible(false)}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={Roles}
          ItemSeparatorComponent={() => <Separator />}
          ListHeaderComponent={() => <Separator />}
          ListFooterComponent={() => <ListFooter />}
          keyExtractor={item => item}
          renderItem={({ item }) => renderItem(item)}
        />
        <Footer>
          <Grid.Row mb={10} center>
            <Button disabled={!role} onPress={selectItem} title="Select" />
          </Grid.Row>
          <Grid.Row center>
            <Button
              outline
              type={BUTTONS.SECONDARY}
              onPress={() => setVisible(false)}
              title="Cancel"
            />
          </Grid.Row>
        </Footer>
      </Modal>
    </Form.Container>
  );
}

RoleSelect.propTypes = {
  style: ViewPropTypes.style,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

RoleSelect.defaultProps = {
  style: {},
  value: null,
  placeholder: null,
  label: null,
  disabled: false,
  onBlur: () => {},
};

export default RoleSelect;
