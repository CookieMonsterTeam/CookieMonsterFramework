/**
 * Adds the mod to the saveData object to store Settings and Headers
 */
export default function registerMod(modName) {
  Game.mods.cookieMonsterFramework.saveData[modName] = { settings: {}, headers: {} };
}
