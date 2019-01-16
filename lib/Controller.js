import autoBind from '/lib/autoBind.js';
import { Collection } from '/lib/Collection.js';
import { View } from '/lib/View.js';
import { EventEmitter } from '/lib/EventEmitter.js';

const buildOptions = (options) => {
  const defaultOptions = {
    model: null,
    collection: null,
    view: null,
  };

  return Object.assign(
    {},
    defaultOptions,
    options,
  );
};

export class Controller extends EventEmitter {
  constructor(options) {
    super();
    const self = this.constructor;
    autoBind(this);

    const {
      view,
      model,
      collection,
    } = buildOptions(options);

    this.view = view || new self.viewClass();
    this.collection = collection;
    this.model = model;

    this.initialize();
  }

  initialize() {}
}

Controller.viewClass = View;
