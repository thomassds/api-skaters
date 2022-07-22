const { Router } = require("express");

const SkatistaController = require("../controllers/SkatistaController");
const NotaController = require("../controllers/NotaController");
const MatematicaController = require("../controllers/MatematicaController");

const routes = Router();

routes.get("/skatistas/", SkatistaController.getAllSkaters);

routes.get("/skatista/:name/", SkatistaController.getOneSkaterByName);

routes.post("/notas", NotaController.handleMediaNote);

routes.get(
  "/numbers/cousin/:number",
  MatematicaController.handleFiltercousinNumbers
);

module.exports = routes;
