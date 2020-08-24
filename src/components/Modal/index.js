import React from 'react';
import { Modal as RnModal, ViewPropTypes } from 'react-native';
import * as PropTypes from 'prop-types';
import { CloseIcon, Container, Content, Header } from './styles';
import Title from '../Title';
import { COLORS } from 'styles';

function Modal(props) {
  const { style, children, visible, title, onClose, onShow } = props;
  return (
    <RnModal
      onDismiss={onClose}
      onRequestClose={onClose}
      onShow={onShow}
      presentationStyle="formSheet"
      animationType="slide"
      visible={visible}
      style={style}>
      <Container>
        <Content>
          <Header>
            {!!title && <Title color={COLORS.DARK_BLUE} text={title} />}
            <CloseIcon icon="close" onPress={onClose} />
          </Header>
          {children}
        </Content>
      </Container>
    </RnModal>
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  onShow: PropTypes.func,
  visible: PropTypes.bool,
  style: ViewPropTypes.style,
};

Modal.defaultProps = {
  style: {},
  visible: false,
  onShow: () => {},
  title: '',
};

export default Modal;
