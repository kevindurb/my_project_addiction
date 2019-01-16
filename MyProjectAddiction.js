import { PostListController } from '/Controllers/PostListController.js';
import { PostCollection } from '/Collections/PostCollection.js';
import { PostsGateway } from '/Gateways/PostsGateway.js';

class MyProjectAddiction {
  constructor() {
    this.postCollection = new PostCollection();
    this.postsGateway = new PostsGateway({
      collection: this.postCollection,
    });
    this.postListController = new PostListController({
      collection: this.postCollection,
    });

    setInterval(() => {
      this.postsGateway.fetchAll();
    }, 1000);
  }
}

export {
  MyProjectAddiction,
};
