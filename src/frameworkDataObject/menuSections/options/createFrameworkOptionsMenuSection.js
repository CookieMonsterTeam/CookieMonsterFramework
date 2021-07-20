import toggleHeader from '../../../menu/toggles/toggleHeader';

/**
 * Add things to the Options menu
 */
export default function createFrameworkOptionsMenuSection() {
  const modOptionsDiv = document.createElement('div');
  modOptionsDiv.className = 'subsection';
  modOptionsDiv.id = 'cookieMonsterFrameworkMenuSection';

  const titleDiv = document.createElement('div');
  titleDiv.className = 'title';
  titleDiv.innerHTML = 'Cookie Monster Mod Family';

  const buttonSpan = document.createElement('span');
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
  buttonSpan.textContent = Game.mods.cookieMonsterFramework.saveData.cookieMonsterFramework.headers
    .optionsMenu
    ? '-'
    : '+';
  buttonSpan.onclick = function () {
    toggleHeader('cookieMonsterFramework', 'optionsMenu');
    Game.UpdateMenu();
  };
  titleDiv.appendChild(buttonSpan);

  modOptionsDiv.appendChild(titleDiv);

  return modOptionsDiv;
}
