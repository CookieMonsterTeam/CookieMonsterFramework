import init from './init';
import load from './load';
import save from './save';

/** The mod object to be registered with the Modding API */
const cookieMonsterFramework = {
  init,
  load,
  save,
  listeners: {
    infoMenu: [],
  },
  saveData: { cookieMonsterFramework: { headers: {}, settings: {} } },
};

export default cookieMonsterFramework;
