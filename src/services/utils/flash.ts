import {showMessage} from 'react-native-flash-message';

const throwError = (message: string) =>
  showMessage({
    message,
    type: 'danger',
  });

const flashSuccess = (message: string) =>
  showMessage({
    message,
    type: 'success',
  });

export {throwError, flashSuccess};
