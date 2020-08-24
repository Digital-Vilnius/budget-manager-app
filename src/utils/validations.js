import _ from 'lodash';

const notEmpty = (value, errorMessage) =>
  !value || _.trim(value).length === 0 ? errorMessage : null;

const validEmail = (value, errorMessage) => {
  const regex = /\S+@\S+\.\S+/;
  return regex.test(String(value).toLowerCase()) ? null : errorMessage;
};

export { notEmpty, validEmail };
