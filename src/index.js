import SettingColours from './options/settingClasses/settingColours';
import SettingInputNumber from './options/settingClasses/settingInputNumber';
import SettingKeycode from './options/settingClasses/settingKeycode';
import SettingStandard from './options/settingClasses/settingStandard';
import SettingStandardWithFunc from './options/settingClasses/settingStandardWithFunc';
import SettingVolume from './options/settingClasses/settingVolume';
import cookieMonsterPrompt from './notifications/prompt';
import createFlash from './notifications/flash';
import createInfoListing from './menu/listings/createInfoListing';
import createModMenuSection from './menu/createModMenuSection';
import createNotification from './notifications/notification';
import createOptionsListing from './menu/listings/createOptionListing';
import createOptionsSubHeader from './menu/listings/createOptionsSubHeader';
import initModFramework from './init/initModFramework';
import loadMod from './savingAndLoading/loadMod';
import playCMSound from './notifications/sound';
import registerMod from './init/registerMod';
import saveFramework from './savingAndLoading/saveFramework';

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

export const settingClasses = {
  SettingColours,
  SettingInputNumber,
  SettingStandard,
  SettingStandardWithFunc,
  SettingKeycode,
  SettingVolume,
};
