import Setting from './baseSetting';

/** The colour picker setting class */
export default class SettingColours extends Setting {
  constructor(defaultValue, type, group, desc) {
    super(defaultValue, type, group);
    this.desc = desc;
  }
}
