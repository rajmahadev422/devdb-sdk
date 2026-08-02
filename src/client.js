import { JsonDBError } from "./errors.js";

export class HttpClient {
  constructor({ url }) {
    if (!url) {
      throw new Error("Server url is required");
    }

    this.baseUrl = url.replace(/\/+$/, "");
  }

  async request(path, options = {}) {
    const response = await fetch(`${this.baseUrl}${path}`, {
      headers: {
        "Content-Type": "application/json",
        ...(options.headers || {})
      },
      ...options
    });

    const data = await response.json().catch(() => null);

    if (!response.ok) {
      const message =
        data?.error?.message || "Request failed";

      const code =
        data?.error?.code || "REQUEST_FAILED";

      throw new JsonDBError(message, code, response.status);
    }

    return data?.data;
  }

  async get(path) {
    return this.request(path, {
      method: "GET"
    });
  }

  async post(path, body) {
    return this.request(path, {
      method: "POST",
      body: JSON.stringify(body)
    });
  }

  async put(path, body) {
    return this.request(path, {
      method: "PUT",
      body: JSON.stringify(body)
    });
  }

  async patch(path, body) {
    return this.request(path, {
      method: "PATCH",
      body: JSON.stringify(body)
    });
  }

  async delete(path) {
    return this.request(path, {
      method: "DELETE"
    });
  }
}