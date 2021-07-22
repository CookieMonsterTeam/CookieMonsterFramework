import initModFramework from './init/initModFramework';
import registerMod from './init/registerMod';
import createInfoListing from './menu/listings/createInfoListing';
import createModMenuSection from './menu/createModMenuSection';
import loadMod from './savingAndLoading/loadMod';
import saveFramework from './savingAndLoading/saveFramework';
import createOptionsListing from './menu/listings/createOptionListing';
import createOptionsSubHeader from './menu/listings/createOptionsSubHeader';
import createFlash from './notifications/flash';
import createNotification from './notifications/notification';
import cookieMonsterPrompt from './notifications/prompt';
import playCMSound from './notifications/sound';
import SettingColours from './options/settingClasses/settingColours';
import SettingInputNumber from './options/settingClasses/settingInputNumber';
import SettingKeycode from './options/settingClasses/settingKeycode';
import SettingStandard from './options/settingClasses/settingStandard';
import SettingStandardWithFunc from './options/settingClasses/settingStandardWithFunc';
import SettingVolume from './options/settingClasses/settingVolume';

export const initFunctions = {
  initModFramework,
  registerMod,
};
export const menuFunctions = {
  listings: {
    createInfoListing,
    createOptionsListing,
    createOptionsSubHeader,
  },
  createModMenuSection,
};

export const notificationsFunctions = {
  createFlash,
  createNotification,
  cookieMonsterPrompt,
  playCMSound,
};

export const optionFunctions = {};

export const saveAndLoadingFunctions = {
  loadMod,
  saveFramework,
};

export const saveClasses = {
  SettingColours,
  SettingInputNumber,
  SettingStandard,
  SettingStandardWithFunc,
  SettingKeycode,
  SettingVolume,
};
