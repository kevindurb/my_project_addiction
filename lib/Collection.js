import { EventEmitter } from '/lib/EventEmitter.js';

export class Collection extends EventEmitter {
  constructor(items = []) {
    super();
    this.order = items.map(item => item.id);
    this.items = items.reduce((acc, item) => {
      return Object.assign(
        {},
        acc,
        { [item.id]: item },
      );
    }, {});

    this.order = [...new Set(this.order)];
  }

  get(id) {
    return this.items[id];
  }

  push(item) {
    const id = item.id;
    this.order.push(id);
    this.order = [...new Set(this.order)];
    this.items[id] = item;
    this.emit('change');
  }

  remove(item) {
    this.order = this.order.filter(x => x !== item.id);
    delete this.items[item.id];
    this.emit('change');
  }

  forEach(fn) {
    this.order.forEach((id) => {
      fn(this.items[id]);
    });
  }

  map(fn) {
    return this.order.map((id) => {
      return fn(this.items[id]);
    });
  }
}
