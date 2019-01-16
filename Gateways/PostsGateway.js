import { Gateway } from '/lib/Gateway.js';

class PostsGateway extends Gateway {
}

PostsGateway.basePath = '/posts.json';

export {
  PostsGateway,
};
