import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import RBSheet from 'react-native-raw-bottom-sheet';
import { Container } from './styles';

function BottomModal(props) {
  const { children, visible, onClose } = props;
  const ref = useRef(null);

  useEffect(() => {
    if (visible) {
      ref.current.open();
    } else {
      ref.current.close();
    }
  }, [visible]);

  return (
    <RBSheet
      animationType="fade"
      closeDuration={300}
      onClose={onClose}
      ref={ref}
      closeOnDragDown
      closeOnPressMask
      visible={visible}>
      <Container>{children}</Container>
    </RBSheet>
  );
}

BottomModal.propTypes = {
  visible: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

BottomModal.defaultProps = {
  visible: false,
};

export default BottomModal;
