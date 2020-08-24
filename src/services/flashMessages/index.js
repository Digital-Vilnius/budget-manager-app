import { showMessage } from 'react-native-flash-message';
import { MESSAGE_TYPES } from 'constants';

class FlashMessagesService {
  static showSuccess(message, description = null) {
    showMessage({
      message,
      description,
      type: MESSAGE_TYPES.SUCCESS,
    });
  }

  static showGenericError(description = null) {
    showMessage({
      message: 'Error has occurred',
      description,
      type: MESSAGE_TYPES.ERROR,
    });
  }

  static showError(message, description = null) {
    showMessage({
      message: message,
      description,
      type: MESSAGE_TYPES.ERROR,
    });
  }
}

export default FlashMessagesService;
