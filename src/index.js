import { HttpClient } from "./client.js";
import { CollectionClient } from "./collection.js";

class DB {
  constructor(config) {
    this.client = new HttpClient(config);

    return new Proxy(this, {
      get: (target, prop) => {
        if (prop in target) {
          return target[prop];
        }

        if (typeof prop === "symbol") {
          return target[prop];
        }

        return new CollectionClient(target.client, prop);
      }
    });
  }

  collection(name) {
    return new CollectionClient(this.client, name);
  }
}

export default DB;