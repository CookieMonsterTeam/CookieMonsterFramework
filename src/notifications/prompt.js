/** Creates a Prompt similar to the base game fixing some of the stuff breaking them
 * @param 	{string}	content	  The outerHTML of the inputPrompt
 * @param 	{Array}		options	  An array containing labels and functions for the buttons of the prompt
 */
export default function cookieMonsterPrompt(content, options) {
  Game.promptWrapL.className = 'framed';
  Game.promptL.innerHTML = `${content}<div class="optionBox"></div>`;
  Object.keys(options).forEach((i) => {
    const option = document.createElement('a');
    option.id = `promptOption${i}`;
    option.className = 'option';
    option.onclick = function () {
      PlaySound('snd/tick.mp3');
      options[i][1]();
    };
    option.textContent = options[i][0]; // eslint-disable-line prefer-destructuring
    Game.promptL.children[1].appendChild(option);
  });
  Game.promptAnchorL.style.display = 'block';
  Game.darkenL.style.display = 'block';
  Game.promptL.focus();
  Game.promptOn = 1;
  Game.UpdatePrompt();
}
