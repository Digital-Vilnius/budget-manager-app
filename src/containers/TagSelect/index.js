import React, { useState } from 'react';
import { Footer } from './styles';
import { Button, Modal, OptionsItem } from 'components';
import PropTypes from 'prop-types';
import {BUTTONS, Form, Grid} from 'styles';
import { ViewPropTypes } from 'react-native';
import { TagsService } from 'core/services';
import Tags from '../Tags';

function TagSelect(props) {
  const { onChange, value, name, style, disabled, label, placeholder } = props;
  const [visible, setVisible] = useState(false);
  const [tag, setTag] = useState(value);

  const select = () => {
    setVisible(false);
    onChange({ name, value: tag.id });
  };

  const renderItem = item => (
    <OptionsItem
      selected={item.id === tag?.id}
      description={item.description}
      onPress={() => setTag(item.id === tag?.id ? null : item)}
      key={item.id}
      title={item.title}
    />
  );

  const renderValue = () => {
    if (value) {
      const title = TagsService.findTagById(value)?.title;
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
        title="Select tag"
        visible={visible}>
        <Tags renderItem={renderItem} />
        <Footer>
          <Grid.Row mb={10} center>
            <Button disabled={!tag} onPress={select} title="Select" />
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

TagSelect.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string.isRequired,
  style: ViewPropTypes.style,
  disabled: PropTypes.bool,
  value: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

TagSelect.defaultProps = {
  style: {},
  value: null,
  placeholder: null,
  disabled: false,
};

export default TagSelect;
