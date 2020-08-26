import React, { useState } from 'react';
import { Footer } from './styles';
import { Button, Modal, OptionsItem } from 'components';
import PropTypes from 'prop-types';
import { Form, Grid } from 'styles';
import { ViewPropTypes } from 'react-native';
import { CategoriesService } from 'services';
import Categories from '../Categories';

function CategorySelect(props) {
  const { onChange, value, name, style, disabled, label, placeholder } = props;
  const [visible, setVisible] = useState(false);
  const [category, setCategory] = useState(value);

  const select = () => {
    setVisible(false);
    onChange({ name, value: category.id });
  };

  const renderItem = item => (
    <OptionsItem
      selected={item.id === category?.id}
      description={item.description}
      onPress={() => setCategory(item.id === category?.id ? null : item)}
      key={item.id}
      title={item.title}
    />
  );

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
        <Categories renderItem={renderItem} />
        <Footer>
          <Grid.Row center>
            <Button disabled={!category} onPress={select} title="Select" />
          </Grid.Row>
        </Footer>
      </Modal>
    </Form.Container>
  );
}

CategorySelect.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string.isRequired,
  style: ViewPropTypes.style,
  disabled: PropTypes.bool,
  value: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

CategorySelect.defaultProps = {
  style: {},
  value: null,
  placeholder: null,
  disabled: false,
};

export default CategorySelect;
