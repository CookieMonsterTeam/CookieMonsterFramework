/**
 * This creates a save function to the CM object. Per Game code/comments:
 * "use this to store persistent data associated with your mod
 * return 'a string to be saved';"
 * @returns {string}    The data to be saved
 */
export default function save() {
  // window.CookieMonsterFrameworkData.FrameworkSave = { test: 'test' };
  return JSON.stringify(window.cookieMonsterFrameworkData.framework);
}
