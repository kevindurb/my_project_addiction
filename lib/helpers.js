export function debug(namespace, type = 'log') {
  return function(...args) {
    console[type](`[${namespace}]`, ...args)
  }
}

const log = debug('helpers');

export function qs(selector, scope) {
  log('.qs', ...arguments);
  return (scope || document).querySelector(selector);
}

export function on(target, type, callback, capture) {
  log('.on', ...arguments);
  return target.addEventListener(type, callback, !!capture);
}

export function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

export const keyCodes = {
  ENTER: 13,
};
