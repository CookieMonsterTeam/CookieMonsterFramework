/**
 * This function plays a sound depending on config
 * @param	{string}	modName	    The name of the mod
 * @param	{variable}	url			A variable that gives the url for the sound (e.g., CM.Options.GCSoundURL)
 * @param	{string}	sndConfig	The setting in CM.Options that is checked before creating the sound
 * @param	{string}	volConfig	The setting in CM.Options that is checked to determine volume
 * @param	{bool}    forced		Whether the sound should play regardless of settings, used to test the sound
 */
export default function playCMSound(modName, url, sndConfig, volConfig, forced) {
  if (
    (Game.mods.cookieMonsterFramework.saveData[modName].settings[sndConfig] === 1 || forced) &&
    window.cookieMonsterFrameworkData.isInitializing === false
  ) {
    // eslint-disable-next-line new-cap
    const sound = new Audio(url);
    if (Game.mods.cookieMonsterFramework.saveData[modName].settings.GeneralSound)
      sound.volume =
        (Game.mods.cookieMonsterFramework.saveData[modName].settings[volConfig] / 100) *
        (Game.volume / 100);
    else
      sound.volume = Game.mods.cookieMonsterFramework.saveData[modName].settings[volConfig] / 100;
    sound.play();
  }
}
