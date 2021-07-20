import createFrameworkOptionsMenuSection from './createFrameworkOptionsMenuSection';
/**
 * Add things to the Options menu
 * The listeners.optionsMenu objects contains functions which create <div>'s to add to the menu section
 */
export default function addOptionsMenuSection() {
  const subMenuLength = l('menu').children[2].children.length - 1;
  l('menu').children[2].insertBefore(
    createFrameworkOptionsMenuSection(),
    l('menu').children[2].children[subMenuLength],
  );

  if (Game.mods.cookieMonsterFramework.saveData.cookieMonsterFramework.headers.optionsMenu) {
    const listeners = Game.mods.cookieMonsterFramework.listeners.optionsMenu;
    for (let i = 0; i < listeners.length; i++) {
      l('cookieMonsterFrameworkMenuSection').appendChild(listeners[i]());
    }
  }
}
