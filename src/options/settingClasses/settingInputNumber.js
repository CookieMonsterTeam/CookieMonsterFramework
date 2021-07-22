import Setting from './baseSetting';

/** The number input setting class */
export default class SettingInputNumber extends Setting {
  constructor(defaultValue, type, group, label, desc, min, max) {
    super(defaultValue, type, group);
    this.label = label;
    this.desc = desc;
    this.min = min;
    this.max = max;
  }
}
