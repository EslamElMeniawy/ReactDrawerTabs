/* eslint-disable no-console */
/* global __DEV__ */

export default function Log(message, data) {
  if (__DEV__) {
    if (data) {
      console.log(message, data);
    } else {
      console.log(message);
    }
  }
}
