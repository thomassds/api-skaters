const database = require("../database");

class UserController {
  index(req, res) {
    return res.json(database);
  }

  indexId(req, res) {
    const { id } = req.params;

    const response = database.find((user) => user.id == id);

    return res.json(response);
  }

  store(req, res) {
    const { userId, title, body } = req.body;

    if (!userId) {
      return res.status(404).json({ error: "userId is not found" });
    }

    if (!title) {
      return res.status(404).json({ error: "title is not found" });
    }

    if (!body) {
      return res.status(404).json({ error: "body is not found" });
    }

    const user = {
      userId,
      id: database.length + 1,
      title,
      body,
    };

    database.push(user);

    return res.json(user);
  }

  update(req, res) {
    const { id } = req.params;
    const { userId, title, body } = req.body;

    const response = database.map((item) => {
      if (item.id == id) {
        item = {
          userId,
          id,
          title,
          body,
        };
      }

      return item;
    });

    return res.json(response);
  }

  delete(req, res) {
    const { id } = req.params;

    const index = database.findIndex((user) => user.id == id);

    if (index == -1) {
      return res.status(400).json({ error: "Index is not found" });
    }

    database.splice(index, index + 1);

    return res.json(database);
  }
}

module.exports = new UserController();
