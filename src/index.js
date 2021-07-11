import initModFramework from './initFunctions/initModFramework';
import registerMod from './initFunctions/registerMod';
import createInfoListing from './menuFunctions/createInfoListing';
import createModMenuSection from './menuFunctions/createModMenuSection';
import toggleHeader from './menuFunctions/toggleHeader';
import loadMod from './saveDataFunctions/loadMod';
import saveFramework from './saveDataFunctions/saveFramework';

export const initFunctions = {
  initModFramework,
  registerMod,
};
export const menuFunctions = {
  createInfoListing,
  createModMenuSection,
  toggleHeader,
};
export const optionFunctions = {};

export const saveFunctions = {
  loadMod,
  saveFramework,
};
