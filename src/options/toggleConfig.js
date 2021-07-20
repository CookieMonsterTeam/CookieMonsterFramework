import saveFramework from '../savingAndLoading/saveFramework';

/**
 * This function toggles options by incrementing them with 1 and handling changes
 * It is called by the onclick event of options of the "bool" type
 * @param 	{string}	modName	      The name of the option
 * @param 	{string}	configName	  The name of the option
 * @param 	{object}	settingsData	Object with data about the settings
 */
export default function ToggleConfig(modName, configName, settingsData) {
  Game.mods.cookieMonsterFramework.saveData[modName].settings[configName] += 1;
  if (
    Game.mods.cookieMonsterFramework.saveData[modName].settings[configName] ===
    settingsData[configName].label.length
  ) {
    Game.mods.cookieMonsterFramework.saveData[modName].settings[configName] = 0;
    if (settingsData[configName].toggle)
      l(`${modName}Options${configName}`).className = 'option off';
  } else l(`${modName}Options${configName}`).className = 'option';

  if (typeof settingsData[configName].func !== 'undefined') {
    settingsData[configName].func();
  }

  saveFramework();
}
