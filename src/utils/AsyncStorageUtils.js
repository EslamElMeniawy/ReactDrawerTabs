import AsyncStorage from '@react-native-community/async-storage';
import Log from './DebugUtils';

// #region Keys
export const LANGUAGE_KEY = 'Language';
// #endregion

/**
 * Get data from async storage.
 *
 * @param {String} key The key for data to get.
 *
 * @returns The data if available or null if not available or error.
 */
export async function getData(key) {
  try {
    const value = await AsyncStorage.getItem(key);
    Log(`Value for "${key}": "${value}"`);
    return value;
  } catch (e) {
    // Error reading value.
    Log(`Error reading value for "${key}": `, e);
    return null;
  }
}

/**
 * Save data to async storage.
 * If error occurred while saving log that.
 *
 * @param {Sting} key The key for data to save.
 * @param {*} value The value to be saved.
 *
 * @returns "true" if data saved or "false" if error.
 */
export async function setData(key, value) {
  try {
    await AsyncStorage.setItem(key, value);
    Log(`Done saving "${value}" for "${key}"`);
    return true;
  } catch (e) {
    // Error saving.
    Log(`Error saving "${value}" for "${key}": `, e);
    return false;
  }
}
