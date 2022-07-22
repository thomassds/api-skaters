class SkatistaController {
  getAllSkaters(req, res) {
    return res.json(database);
  }

  getOneSkaterByName(req, res) {
    const { name } = req.params;

    const skaters = database.filter((item) => item.name == name);

    return res.json(skaters);
  }
}

module.exports = new SkatistaController();
