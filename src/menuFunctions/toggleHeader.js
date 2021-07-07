/**
 * This function toggles header options by incrementing them with 1 and handling changes
 * It is called by the onclick event of the +/- next to headers
 * @param 	{string}	config	The name of the header
 */
export default function toggleHeader(modName, headerName) {
  if (
    typeof Game.mods.cookieMonsterFramework.saveData[modName].headers[headerName] === 'undefined'
  ) {
    Game.mods.cookieMonsterFramework.saveData[modName].headers[headerName] = 1;
  }
  switch (Game.mods.cookieMonsterFramework.saveData[modName].headers[headerName]) {
    case 0:
      Game.mods.cookieMonsterFramework.saveData[modName].headers[headerName] = 1;
      break;
    default:
      Game.mods.cookieMonsterFramework.saveData[modName].headers[headerName] = 0;
      break;
  }
  //   SaveConfig();
}
