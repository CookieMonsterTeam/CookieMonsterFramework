/**
 * This function saves the settings and headers within the Framework without saving any of the other save-data
 * This allows saving in between the autosave intervals
 */
export default function saveFramework() {
  Object.keys(Game.mods.cookieMonsterFramework.saveData).forEach((modName) => {
    const modSaveString = JSON.stringify(Game.mods.cookieMonsterFramework.saveData[modName]);

    const cookieClickerSaveString = b64_to_utf8(
      unescape(localStorage.getItem('CookieClickerGame')).split('!END!')[0],
    );
    const pattern = new RegExp(`${modName}.*(;|$)`);
    const modSave = cookieClickerSaveString.match(pattern);
    if (modSave !== null) {
      const newSaveString = cookieClickerSaveString.replace(
        modSave[0],
        `${modName}:${modSaveString}`,
      );
      localStorage.setItem('CookieClickerGame', escape(`${utf8_to_b64(newSaveString)}!END!`));
    }
  });
}
