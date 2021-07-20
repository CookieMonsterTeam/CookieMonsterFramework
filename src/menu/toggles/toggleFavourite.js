import saveFramework from '../../savingAndLoading/saveFramework';

/**
 * This function toggles favourite settings by adding them to an array in the savedata
 * It is called by the onclick event of the favourite stars
 * @param 	{string}    modName	    The name of the mod
 * @param 	{string}	configName	The name of the setting
 */
export default function toggleFavouriteSetting(modName, configName) {
  if (Game.mods.cookieMonsterFramework.saveData[modName].favouriteSettings.includes(configName))
    Game.mods.cookieMonsterFramework.saveData[modName].favouriteSettings =
      Game.mods.cookieMonsterFramework.saveData[modName].favouriteSettings.filter(
        (ele) => ele !== configName,
      );
  else Game.mods.cookieMonsterFramework.saveData[modName].favouriteSettings.push(configName);
  saveFramework();
}
