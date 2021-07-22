import jscolor, * as JsColor from '@eastdesire/jscolor';

import cookieMonsterPrompt from '../../notifications/prompt';
import createFavouriteStar from './createOptionsFavouriteStar';
import createFlash from '../../notifications/flash';
import playCMSound from '../../notifications/sound';
import saveFramework from '../../savingAndLoading/saveFramework';
import toggleConfig from '../../options/toggleConfig';
import toggleConfigKeycode from '../../options/toggleConfigKeycode';
import toggleConfigVolume from '../../options/toggleConfigVolume';

/**
 * This function creates an option listing div-object
 * @param 	{string}		modName	          The name of the option
 * @param 	{string}		configName	      The name of the option
 * @param 	{object}		settingsData	    Object with data about the settings
 * @param 	{function}	updateColoursFunc	Function to be called to update colours
 * @param 	{function}	refreshScaleFunc	Function to be called to refresh scale
 * @returns	{object}		div		            The option object
 */
export default function createOptionsListing(
  modName,
  configName,
  settingsData,
  updateColoursFunc,
  refreshScaleFunc,
) {
  const div = document.createElement('div');
  div.className = 'listing';

  if (Game.mods.cookieMonsterFramework.saveData[modName].settings.FavouriteSettings === 1) {
    div.appendChild(
      createFavouriteStar(
        modName,
        configName,
        Game.mods.cookieMonsterFramework.saveData[modName].favouriteSettings,
      ),
    );
  }

  if (settingsData[configName].type === 'bool') {
    // Create toggle button
    const a = document.createElement('a');
    if (
      settingsData[configName].toggle &&
      Game.mods.cookieMonsterFramework.saveData[modName].settings[configName] === 0
    ) {
      a.className = 'option off';
    } else {
      a.className = 'option';
    }
    a.id = `${modName}Options${configName}`;
    a.onclick = function () {
      toggleConfig(modName, configName, settingsData);
      Game.UpdateMenu();
    };
    a.textContent =
      settingsData[configName].label[
        Game.mods.cookieMonsterFramework.saveData[modName].settings[configName]
      ];
    div.appendChild(a);

    // Create description label
    const label = document.createElement('label');
    label.textContent = settingsData[configName].desc;
    label.style.lineHeight = '1.6';
    div.appendChild(label);
    return div;
  }

  if (settingsData[configName].type === 'vol') {
    const volume = document.createElement('div');

    // Create slider
    volume.className = 'sliderBox';
    const title = document.createElement('div');
    title.style.float = 'left';
    title.innerHTML = settingsData[configName].desc;
    volume.appendChild(title);
    const percent = document.createElement('div');
    percent.id = `slider${modName}${configName}right`;
    percent.style.float = 'right';
    percent.innerHTML = `${Game.mods.cookieMonsterFramework.saveData[modName].settings[configName]}%`;
    volume.appendChild(percent);
    const slider = document.createElement('input');
    slider.className = 'slider';
    slider.id = `slider${modName}${configName}`;
    slider.style.clear = 'both';
    slider.type = 'range';
    slider.min = '0';
    slider.max = '100';
    slider.step = '1';
    slider.value = Game.mods.cookieMonsterFramework.saveData[modName].settings[configName];
    slider.oninput = function () {
      toggleConfigVolume(modName, configName);
      Game.UpdateMenu();
    };
    slider.onchange = function () {
      toggleConfigVolume(modName, configName);
      Game.UpdateMenu();
    };
    volume.appendChild(slider);
    div.appendChild(volume);

    // Create test sound button
    const a = document.createElement('a');
    a.className = 'option';
    a.onclick = function () {
      playCMSound(
        modName,
        Game.mods.cookieMonsterFramework.saveData[modName].settings[
          configName.replace('Volume', 'SoundURL')
        ],
        configName.replace('Volume', 'Sound'),
        configName,
        true,
      );
    };
    a.textContent = 'Test sound';
    div.appendChild(a);
    return div;
  }

  if (settingsData[configName].type === 'url') {
    // Create label
    const span = document.createElement('span');
    span.className = 'option';
    span.textContent = `${settingsData[configName].label} `;
    span.style.lineHeight = '1.6';
    div.appendChild(span);

    // Create input
    const input = document.createElement('input');
    input.id = `${modName}Options${configName}`;
    input.className = 'option';
    input.type = 'text';
    input.readOnly = true;
    input.value = Game.mods.cookieMonsterFramework.saveData[modName].settings[configName];
    input.style.width = '300px';
    div.appendChild(input);
    div.appendChild(document.createTextNode(' '));

    // Create prompt
    const inputPrompt = document.createElement('input');
    inputPrompt.id = `${modName}Options${configName}Prompt`;
    inputPrompt.className = 'option';
    inputPrompt.type = 'text';
    inputPrompt.value = Game.mods.cookieMonsterFramework.saveData[modName].settings[configName];

    const a = document.createElement('a');
    a.className = 'option';
    a.onclick = function () {
      cookieMonsterPrompt(inputPrompt.outerHTML, [
        [
          'Save',
          function () {
            Game.mods.cookieMonsterFramework.saveData[modName].settings[configName] = l(
              `${modName}Options${configName}Prompt`,
            ).value;
            saveFramework();
            Game.ClosePrompt();
            Game.UpdateMenu();
          },
        ],
        [
          'Cancel',
          function () {
            Game.ClosePrompt();
          },
        ],
      ]);
    };
    a.textContent = 'Edit';
    div.appendChild(a);

    // Create description label
    const label = document.createElement('label');
    label.textContent = settingsData[configName].desc;
    label.style.lineHeight = '1.6';
    div.appendChild(label);
    return div;
  }

  if (settingsData[configName].type === 'colour') {
    const innerSpan = document.createElement('span');
    innerSpan.className = 'option';

    // Create input
    const input = document.createElement('input');
    input.id = configName;
    input.style.width = '65px';
    input.value = Game.mods.cookieMonsterFramework.saveData[modName].settings[configName];
    innerSpan.appendChild(input);
    const change = function () {
      Game.mods.cookieMonsterFramework.saveData[modName].settings[this.targetElement.id] =
        this.toHEXString();
      updateColoursFunc();
      saveFramework();
      Game.UpdateMenu();
    };
    // eslint-disable-next-line no-new
    new JsColor(input, { hash: true, position: 'right', onInput: change });

    // Create description label
    const label = document.createElement('label');
    label.textContent = settingsData[configName].desc;
    label.style.lineHeight = '1.6';
    innerSpan.appendChild(label);

    // Create test button for flash colour
    if (configName.includes('Flash')) {
      const a = document.createElement('a');
      a.className = 'option';
      a.onclick = function () {
        createFlash(modName, 3, configName.replace('Colour', ''), true);
      };
      a.textContent = 'Test flash';
      innerSpan.appendChild(a);
    }
    div.appendChild(innerSpan);
    jscolor.init();
    return div;
  }

  if (settingsData[configName].type === 'numscale') {
    const span = document.createElement('span');
    span.className = 'option';
    span.textContent = `${settingsData[configName].label} `;
    span.style.lineHeight = '1.6';
    div.appendChild(span);

    // Create input
    const input = document.createElement('input');
    input.id = `${modName}Options${configName}`;
    input.className = 'option';
    input.type = 'number';
    input.value = Game.mods.cookieMonsterFramework.saveData[modName].settings[configName];
    input.min = settingsData[configName].min;
    input.max = settingsData[configName].max;
    input.oninput = function () {
      Game.mods.cookieMonsterFramework.saveData[modName].settings[configName] = this.value;
      saveFramework();
      refreshScaleFunc();
      Game.UpdateMenu();
    };
    div.appendChild(input);
    div.appendChild(document.createTextNode(' '));

    // Create description label
    const label = document.createElement('label');
    label.textContent = settingsData[configName].desc;
    label.style.lineHeight = '1.6';
    div.appendChild(label);
    return div;
  }

  if (settingsData[configName].type === 'keycode') {
    // Create prompt
    const inputPrompt = document.createElement('input');
    inputPrompt.id = `${modName}Options${configName}Prompt`;
    inputPrompt.className = 'option';
    inputPrompt.type = 'text';
    inputPrompt.value =
      Game.mods.cookieMonsterFramework.saveData[modName].settings[configName].displayName;

    // Create toggle button
    const a = document.createElement('a');
    a.className = 'option';
    a.id = `${modName}Options${configName}`;
    a.onclick = function () {
      cookieMonsterPrompt(inputPrompt.outerHTML, []);
      l(`${modName}Options${configName}Prompt`).addEventListener('keyup', (e) => {
        toggleConfigKeycode(modName, configName, e);
        Game.ClosePrompt();
        Game.UpdateMenu();
      });
    };
    a.textContent =
      Game.mods.cookieMonsterFramework.saveData[modName].settings[configName].displayName;
    div.appendChild(a);

    // Create description label
    const label = document.createElement('label');
    label.textContent = settingsData[configName].desc;
    label.style.lineHeight = '1.6';
    div.appendChild(label);
    return div;
  }
  return div;
}
