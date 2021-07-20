import saveFramework from '../savingAndLoading/saveFramework';

/**
 * This function sets the value of the specified volume-option and updates the display in the options menu
 * It is called by the oninput and onchange event of "vol" type options
 * @param 	{string}	modName	    The name of the option
 * @param 	{string}    configName  The name of the option
 */
export default function toggleConfigVolume(modName, configName) {
  if (l(`slider${modName}${configName}`) !== null) {
    l(`slider${modName}${configName}right`).innerHTML = `${
      l(`slider${modName}${configName}`).value
    }%`;
    Game.mods.cookieMonsterFramework.saveData[modName].settings[configName] = Math.round(
      l(`slider${modName}${configName}`).value,
    );
  }
  saveFramework();
}
