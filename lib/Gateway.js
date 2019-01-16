import autoBind from '/lib/autoBind.js';
import { EventEmitter } from '/lib/EventEmitter.js';

const buildOptions = (options) => {
  const defaultOptions = {
    collection: null,
  };

  return Object.assign(
    {},
    defaultOptions,
    options,
  );
};

class Gateway extends EventEmitter {
  constructor(options) {
    super();
    const self = this.constructor;
    autoBind(this);
    const {
      collection,
    } = buildOptions(options);

    this.collection = collection;
    this.basePath = self.basePath;
  }

  fetchAll() {
    fetch(this.basePath)
      .then((response) => response.json())
      .then((items) => (
        items.forEach(item => {
          this.collection.push(item);
          this.fetchDetail(item.id);
        })
      ));
  }

  fetchDetail(id) {
    const item = this.collection.get(id);
    fetch(item.detailUrl)
      .then((response) => response.text())
      .then(text => console.log(text));
  }
}

Gateway.basePath = '/';

export {
  Gateway,
};
