import loadMod from '../saveDataFunctions/loadMod';
import headers from './data/headers';
import settings from './data/settings';
import logicLoop from './logic/logicLoop';

/**
 * This creates a load function to the CM object. Per Game code/comments:
 * "do stuff with the string data you saved previously"
 * @param   {string}    JSON string of save-data
 */
export default function load(str) {
  loadMod('cookieMonsterFramework', str, settings, headers, logicLoop);
}
