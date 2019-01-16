export class EventEmitter {
  constructor() {
    this.events = {};
  }

  addEventListener(event, cb) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(cb);
  }

  removeEventListener(event, cb) {
    this.events[event] =
      this.events[event].filter(evCb => evCb !== cb);
  }

  emit(event, data) {
    if (this.events[event]) {
      this.events[event].forEach(cb => cb(data));
    }
  }
}
