export default class Utility {
  constructor(type, active_status) {
    this.type = type;
    this.number = 5;
    this.active_status = active_status;
  }
  addItem() {
    this.number += 1;
  }
  removeItem() {
    this.number -= 1;
  }
}
