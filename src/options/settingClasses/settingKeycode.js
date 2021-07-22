import Setting from './baseSetting';

/** The setting class for keycodes */
export default class SettingKeycode extends Setting {
  constructor(defaultValue, type, group, desc) {
    super(defaultValue, type, group);
    this.desc = desc;
  }
}
