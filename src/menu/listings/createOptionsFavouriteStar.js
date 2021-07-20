import saveFramework from '../../savingAndLoading/saveFramework';
import toggleFavouriteSetting from '../toggles/toggleFavourite';
/**
 * This function creates the favourite setting star div-object
 * @param 	{string} modName	  The name of the Mod
 * @param 	{string} configName	The name of the option
 * @parm    {array}  favourites An array with the names of all settings that are currently favourited
 * @returns	{object} div		    The option object
 */
export default function createFavouriteStar(modName, configName, favourites) {
  const FavStar = document.createElement('a');
  if (favourites.includes(configName)) {
    FavStar.innerText = '★';
    FavStar.style.color = 'yellow';
  } else FavStar.innerText = '☆';
  FavStar.className = 'option';
  FavStar.onclick = function () {
    toggleFavouriteSetting(modName, configName);
    saveFramework();
    Game.UpdateMenu();
  };
  FavStar.onmouseover = function () {
    Game.tooltip.draw(
      this,
      escape(
        '<div style="min-width: 250px; margin-bottom: 4px;"><div style="text-align: left;">Click to set this setting as favourite and show it in \'favourite\' settings at the top of the Cookie Monster Settings</div></div>',
      ),
    );
  };
  FavStar.onmouseout = function () {
    Game.tooltip.hide();
  };
  FavStar.appendChild(document.createTextNode(' '));
  return FavStar;
}
