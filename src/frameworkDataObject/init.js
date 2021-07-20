import drawLoop from './draw/drawLoop';
import createFlashScreen from './init/createFlashScreen';
import addMenu from './menuSections/addMenu';

/**
 * This creates a init function for the CM object. Per Game code/comments:
 * "this function is called as soon as the mod is registered
 * declare hooks here"
 * It starts the further initialization of CookieMonster and registers hooks
 */
export default function init() {
  // Create Data object in global scope
  window.cookieMonsterFrameworkData = { isInitializing: true };

  // Create MutationObserver for menu sections
  const observer = new MutationObserver(addMenu);
  observer.observe(document.getElementById('menu'), {
    attributes: true,
    childList: true,
    subtree: true,
  });

  // Draw initiaization
  createFlashScreen();

  // Register hooks
  Game.registerHook('draw', drawLoop);
  window.cookieMonsterFrameworkData.isInitializing = false;
}
