export class JsonDBError extends Error {
  constructor(message, code, status) {
    super(message);
    this.name = "JsonDBError";
    this.code = code;
    this.status = status;
  }
}