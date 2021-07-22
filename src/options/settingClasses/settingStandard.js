import Setting from './baseSetting';

/** The standard toggle setting class */
export default class SettingStandard extends Setting {
  constructor(defaultValue, type, group, label, desc, toggle) {
    super(defaultValue, type, group);
    this.label = label;
    this.desc = desc;
    this.toggle = toggle;
  }
}
