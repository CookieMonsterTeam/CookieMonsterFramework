/**
 * This function creates a notifcation depending on config
 * @param	{string}	modName	    The name of the mod
 * @param	{string}	configName	The setting in CM.Options that is checked before creating the notification
 * @param	{string}	title			  The title of the to-be created notifications
 * @param	{string}	message			The text of the to-be created notifications
 */
export default function createNotification(modName, configName, title, message) {
  if (
    Game.mods.cookieMonsterFramework.saveData[modName].settings[configName] === 1 &&
    document.visibilityState === 'hidden' &&
    window.cookieMonsterFrameworkData.isInitializing === false
  ) {
    // eslint-disable-next-line no-new
    new Notification(title, {
      body: message,
      badge: 'https://orteil.dashnet.org/cookieclicker/favicon.ico',
    });
  }
}
