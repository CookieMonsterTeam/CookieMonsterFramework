/**
 * Creates the save data object to be stored
 * @param   {object}    saveData      The loaded save data
 * @param   {object}    settingsData  The data containing default values of settings
 * @param   {object}    headersData   The data containing default values of headers
 */
export default function createSaveDataObject(saveData, settingsData, headersData) {
  const modSaveData = {};

  const settingsObject = {};
  Object.keys(settingsData).forEach((i) => {
    if (typeof saveData.settings === 'undefined' || typeof saveData.settings[i] === 'undefined') {
      settingsObject[i] = settingsData[i].defaultValue; // eslint-disable-line prefer-destructuring
    } else {
      settingsObject[i] = saveData.settings[i];
    }
  });
  modSaveData.settings = settingsObject;

  const headersObject = {};
  Object.keys(headersData).forEach((i) => {
    if (typeof saveData.headers === 'undefined' || typeof saveData.headers[i] === 'undefined') {
      headersObject[i] = headersData[i];
    } else {
      headersObject[i] = saveData.headers[i];
    }
  });
  modSaveData.headers = headersObject;

  Object.keys(saveData).forEach((key) => {
    if (key !== 'settings' && key !== 'headers') {
      modSaveData[key] = saveData[key];
    }
  });
  return modSaveData;
}
