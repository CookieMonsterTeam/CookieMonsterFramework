/**
 * This creates a save function to the CM object. Per Game code/comments:
 * "use this to store persistent data associated with your mod
 * return 'a string to be saved';"
 * @returns {string}    The data to be saved
 */
export default function save() {
  return JSON.stringify(Game.mods.cookieMonsterFramework.saveData.cookieMonsterFramework);
}
