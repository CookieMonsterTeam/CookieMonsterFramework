/**
 * This creates a load function to the CM object. Per Game code/comments:
 * "do stuff with the string data you saved previously"
 * @param   {string}    JSON string of save-data
 */
export default function load(str) {
  window.cookieMonsterFrameworkData.framework = JSON.parse(str);
}
