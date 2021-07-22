/** The basic setting class */
export default class Setting {
  constructor(defaultValue, type, group) {
    this.defaultValue = defaultValue;
    this.type = type;
    this.group = group;
  }
}
