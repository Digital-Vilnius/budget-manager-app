import React, { useState } from 'react';
import { ViewPropTypes } from 'react-native';
import * as PropTypes from 'prop-types';
import _ from 'lodash';
import { Button, Modal } from 'components';
import { BUTTONS, Form, Grid } from 'styles';
import { Footer } from './styles';
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
    multiple,
  } = props;
  const [visible, setVisible] = useState(false);
  const [selectedCategoriesIds, setSelectedCategoriesIds] = useState([]);

  const selectItem = ({ id }) => {
    if (selectedCategoriesIds.includes(id)) {
      const categoriesIds = selectedCategoriesIds.filter(item => item !== id);
      setSelectedCategoriesIds(categoriesIds);
      return;
    }

    if (multiple) {
      setSelectedCategoriesIds([...selectedCategoriesIds, id]);
    } else {
      setSelectedCategoriesIds([id]);
    }
  };

  const confirm = () => {
    setVisible(false);

    let selectedValue;
    if (multiple) {
      selectedValue = selectedCategoriesIds;
    } else {
      selectedValue = selectedCategoriesIds[0] || null;
    }

    onChange({ name, value: selectedValue });
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
          options
          selectedCategoriesIds={selectedCategoriesIds}
          filter={{ accountId: selectedAccount.id }}
          onPress={selectItem}
        />
        <Footer>
          <Grid.Row mb={10}>
            <Button onPress={confirm} title="Select" />
          </Grid.Row>
          <Grid.Row>
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

CategorySelect.propTypes = {
  value: PropTypes.oneOf([
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number),
  ]),
  multiple: PropTypes.bool,
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
  multiple: false,
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
