import { EventEmitter } from '/lib/EventEmitter.js';
import { guid } from '/lib/helpers.js';

export class Model extends EventEmitter {
  constructor(values) {
    super();
    const self = this.constructor;
    const id = values.id || guid();
    this.values = Object.assign({ id: id }, self.props, values);
  }

  get(prop) {
    return this.values[prop];
  }

  set(prop, value) {
    this.values[prop] = value;
    this.emit('change');
  }
}

Model.props = {};
