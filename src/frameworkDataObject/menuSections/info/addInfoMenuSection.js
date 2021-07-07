import createFrameworkInfoMenuSection from './createFrameworkInfoMenuSection';
/**
 * Add things to the Info menu
 * The listeners.infoMenu objects contains functions which create <div>'s to add to the menu section
 */
export default function addInfoMenuSection() {
  const menu = l('menu').children[1];
  menu.insertBefore(createFrameworkInfoMenuSection(), menu.children[1]);

  if (Game.mods.cookieMonsterFramework.saveData.cookieMonsterFramework.headers.infoMenu) {
    const listeners = Game.mods.cookieMonsterFramework.listeners.infoMenu;
    for (let i = 0; i < listeners.length; i++) {
      l('cookieMonsterFrameworkMenuSection').appendChild(listeners[i]());
    }
  }
}
