export class View {
  constructor() {
    const self = this.constructor;
    this.$el = document.createElement(self.tagName);
    this.$el.innerHTML = self.template;

    this.bindOutlets();
  }

  bindOutlets() {
    const els = this.$el.querySelectorAll('[data-outlet]');

    els.forEach((el) => {
      this[el.dataset.outlet] = el;
    });
  }

  appendView(view) {
    this.$el.appendChild(view.$el);
  }

  clear() {
    this.$el.innerHTML = '';
  }
}

View.tagName = 'div';
View.template = '';
