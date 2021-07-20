/**
 * This function creates a flash depending on config
 * @param	{string}	modName	    The name of the mod
 * @param	{number}	mode	      Sets the intensity of the flash, used to recursively dim flash
 * 								              All initial calls of function have use mode === 3
 * @param	{string}	configName	The setting that is checked before creating the flash
 * @param	{bool}    forced	    Whether the sound should play regardless of settings, used to test the sound
 */

export default function createFlash(modName, mode, configName, forced) {
  // The arguments check makes the sound not play upon initialization of the mod
  if (
    ((Game.mods.cookieMonsterFramework.saveData[modName].settings[configName] === 1 || forced) &&
      mode === 3 &&
      window.cookieMonsterFrameworkData.isInitializing === false) ||
    mode === 1
  ) {
    l('CMFlashScreen').style.backgroundColor =
      Game.mods.cookieMonsterFramework.saveData[modName].settings[`Colour${configName}`];
    l('CMFlashScreen').style.opacity = '0.5';
    if (mode === 3) {
      l('CMFlashScreen').style.display = 'inline';
      setTimeout(() => {
        createFlash(modName, 2, configName, true);
      }, 1000 / Game.fps);
    } else {
      setTimeout(() => {
        createFlash(modName, 0, configName, true);
      }, 1000 / Game.fps);
    }
  } else if (mode === 2) {
    l('CMFlashScreen').style.opacity = '1';
    setTimeout(() => {
      createFlash(modName, 1, configName, true);
    }, 1000 / Game.fps);
  } else if (mode === 0) l('CMFlashScreen').style.display = 'none';
}
