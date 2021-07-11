import createSaveDataObject from './createSaveDataObject';
import saveFramework from './saveFramework';

/**
 * Load the data from a save-file into a mod
 * @param   {string}    modName       The name of the mode to be saved
 * @param   {string}    saveData      JSON-string of the save data
 * @param   {object}    settingsData  The data containing default values of settings
 * @param   {object}    headersData   The data containing default values of headers
 * @param   {Function}  logicLoop     The logic-loop of the mod
 */
export default function loadMod(modName, saveData, settingsData, headersData, logicLoop) {
  const saveDataObject = JSON.parse(saveData);
  Game.mods.cookieMonsterFramework.saveData[modName] = createSaveDataObject(
    saveDataObject,
    settingsData,
    headersData,
  );
  saveFramework();
  logicLoop();
  Object.keys(Game.mods.cookieMonsterFramework.saveData[modName].settings).forEach((i) => {
    if (typeof settingsData[i].func !== 'undefined') {
      settingsData[i].func();
    }
  });
  Game.UpdateMenu();
}
