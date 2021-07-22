import Setting from './baseSetting';

/** The standard toggle setting class with functions */
export default class SettingStandardWithFunc extends Setting {
  constructor(defaultValue, type, group, label, desc, toggle, func) {
    super(defaultValue, type, group);
    this.label = label;
    this.desc = desc;
    this.toggle = toggle;
    if (func !== undefined) {
      this.func = func;
    }
  }
}
