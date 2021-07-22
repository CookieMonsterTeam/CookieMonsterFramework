import saveFramework from '../savingAndLoading/saveFramework';

/**
 * This function toggles options by deconstructing the KeyboardEvent
 * It is called by the onclick event of prompts of the "keycode" type
 * @param 	{string}	modName	        The name of the option
 * @param 	{string}	configName	    The name of the option
 * @param   {object}  event           The KeyboardEvent
 */
export default function toggleConfigKeycode(modName, configName, event) {
  const saveObject = {
    key: event.key,
    altKey: event.altKey,
    ctrlKey: event.ctrlKey,
    shiftKey: event.shiftKey,
    displayName: `${event.shiftKey ? `Shift + ` : ''}${event.altKey ? `Alt + ` : ''}${
      event.ctrlKey ? `Ctrl + ` : ''
    }${event.key}`,
  };
  Game.mods.cookieMonsterFramework.saveData[modName].settings[configName] = saveObject;
  saveFramework();
}
