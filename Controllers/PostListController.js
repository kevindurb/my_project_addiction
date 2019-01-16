import { Controller } from '/lib/Controller.js';
import { PostListItemView } from '/Views/PostListItemView.js';

class PostListController extends Controller {
  initialize() {
    this.renderPosts();
  }

  renderPost(post) {
    const view = new PostListItemView();
    this.view.appendView(view);
  }

  renderPosts() {
    this.collection.map(this.renderPost);
  }
}

export {
  PostListController,
}
