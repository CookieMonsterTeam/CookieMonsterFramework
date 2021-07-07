import toggleHeader from './toggleHeader';

/**
 * Returns a subsection for the mod to add listings/info to
 * @param   {string}  modName         The name of the mod (i.e., CookieMonster)
 * @param   {string}  modDisplayName  Display name of the mod (i.e., Cookie Monster)
 * @param   {string}  menuName            Name of the menu (i.e., Info, Options)
 * @returns {object}  modSectionDiv   Div of the subseciont
 */
export default function createModMenuSection(modName, modDisplayName, menuName) {
  const modSectionDiv = document.createElement('div');
  modSectionDiv.className = 'subsection';
  modSectionDiv.id = `${modName}MenuSection`;

  const titleDiv = document.createElement('div');
  titleDiv.className = 'title';
  titleDiv.style.fontSize = '18px';
  titleDiv.innerHTML = modDisplayName;

  const buttonSpan = document.createElement('span'); // Creates the +/- button
  buttonSpan.style.cursor = 'pointer';
  buttonSpan.style.display = 'inline-block';
  buttonSpan.style.height = '14px';
  buttonSpan.style.width = '14px';
  buttonSpan.style.borderRadius = '7px';
  buttonSpan.style.textAlign = 'center';
  buttonSpan.style.backgroundColor = '#C0C0C0';
  buttonSpan.style.color = 'black';
  buttonSpan.style.fontSize = '13px';
  buttonSpan.style.verticalAlign = 'middle';
  buttonSpan.textContent = Game.mods.cookieMonsterFramework.saveData[modName].headers[menuName]
    ? '-'
    : '+';
  buttonSpan.onclick = function () {
    toggleHeader(Game.mods.cookieMonsterFramework.saveData[modName].headers[menuName]);
    Game.UpdateMenu();
  };

  titleDiv.appendChild(buttonSpan);

  modSectionDiv.appendChild(titleDiv);

  return modSectionDiv;
}
