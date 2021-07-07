import modDescription from '../../data/modInfo';
import toggleHeader from '../../../menuFunctions/toggleHeader';
/**
 * Add things to the Info menu
 * @returns {object}  frameworkInfoDiv  Subsection to which other mods can add their info sections
 */
export default function createFrameworkInfoMenuSection() {
  const frameworkInfoDiv = document.createElement('div');
  frameworkInfoDiv.className = 'subsection';
  frameworkInfoDiv.id = 'cookieMonsterFrameworkMenuSection';

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
    .infoMenu
    ? '-'
    : '+';
  buttonSpan.onclick = function () {
    toggleHeader('cookieMonsterFramework', 'infoMenu');
    Game.UpdateMenu();
  };
  titleDiv.appendChild(buttonSpan);

  frameworkInfoDiv.appendChild(titleDiv);

  if (Game.mods.cookieMonsterFramework.saveData.cookieMonsterFramework.headers.infoMenu) {
    const descriptionDiv = document.createElement('div');
    descriptionDiv.className = 'listing';
    descriptionDiv.innerHTML = modDescription;
    frameworkInfoDiv.appendChild(descriptionDiv);
  }

  return frameworkInfoDiv;
}
