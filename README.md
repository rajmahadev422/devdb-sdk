# json-db-sdk

A simple JavaScript SDK for connecting to your self-hosted JSON database server.

It provides a clean API similar to Mongoose-style collection access:

```js
import DB from "json-db-sdk";

const db = new DB({
  url: "http://localhost:5000"
});

await db.users.create({
  name: "Mahadev",
  features: {
    theme: "dark"
  }
});

const users = await db.users.find();
```
## Features

- Simple connection using only server URL
- Collection access like db.users, db.posts, db.settings
- CRUD operations
- Clean JSON responses
- Error handling
- Works with your local/self-hosted JSON DB server

## Installation

```bash
npm install json-db
```
## Quick Start

```js
import DB from "json-db-sdk";

const db = new DB({
  url: "http://localhost:5000"
});

async function main() {
  const created = await db.users.create({
    name: "Mahadev",
    features: {
      theme: "dark"
    }
  });

  console.log("Created:", created);

  const users = await db.users.find();
  console.log("All users:", users);
}

main().catch(console.error);
```
