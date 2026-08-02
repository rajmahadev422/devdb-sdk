export class CollectionClient {
  constructor(client, name) {
    this.client = client;
    this.name = name;
  }

  async create(document) {
    return this.client.post(`/collections/${this.name}`, document);
  }

  async insert(document) {
    return this.create(document);
  }

  async find() {
    return this.client.get(`/collections/${this.name}`);
  }

  async all() {
    return this.find();
  }

  async findById(id) {
    return this.client.get(`/collections/${this.name}/${id}`);
  }

  async getById(id) {
    return this.findById(id);
  }

  async update(id, document) {
    return this.client.put(`/collections/${this.name}/${id}`, document);
  }

  async patch(id, partialDocument) {
    return this.client.patch(`/collections/${this.name}/${id}`, partialDocument);
  }

  async delete(id) {
    return this.client.delete(`/collections/${this.name}/${id}`);
  }
}