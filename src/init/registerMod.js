/**
 * Adds the mod to the saveData object to store (favourite) settings and headers
 */
export default function registerMod(modName) {
  Game.mods.cookieMonsterFramework.saveData[modName] = {
    favouriteSettings: [],
    headers: {},
    settings: {},
  };
}
