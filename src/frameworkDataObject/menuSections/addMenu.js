import addInfoMenuSection from './info/addInfoMenuSection';
// import addOptionsMenuSection from './options/addOptionsMenuSection';

/**
 * Call the function to add a Menu based on the current menu
 * @param {MutationObserver}  The observer object that is listening to DOM-changes of id='menu'
 */
export default function addMenu(_, observer) {
  // Disconnect observer to avoid infinite loop
  observer.disconnect();

  if (Game.onMenu === 'log') {
    addInfoMenuSection();
  } else if (Game.onMenu === 'prefs') {
    // Commented out because this is broken
    // addOptionsMenuSection();
  }

  // Reconnect observer to monitor changes
  observer.observe(document.getElementById('menu'), {
    attributes: true,
    childList: true,
    subtree: true,
  });
}
