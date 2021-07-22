import Setting from './baseSetting';

/** The volume level setting class */
export default class SettingVolume extends Setting {
  constructor(defaultValue, type, group, label, desc) {
    super(defaultValue, type, group);
    this.label = label;
    this.desc = desc;
    for (let i = 0; i < 101; i++) {
      this.label[i] = `${i}%`;
    }
  }
}
