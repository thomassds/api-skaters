const { Router } = require("express");

const SkatistaController = require("../controllers/SkatistaController");
const NotaController = require("../controllers/NotaController");
const MatematicaController = require("../controllers/MatematicaController");
const UserController = require("../controllers/UserController");

const routes = Router();

routes.get("/skatistas/", SkatistaController.getAllSkaters);

routes.get("/skatista/:name/", SkatistaController.getOneSkaterByName);

routes.post("/notas", NotaController.handleMediaNote);

routes.get(
  "/numbers/cousin/:number",
  MatematicaController.handleFilterCousinNumbers
);

// CRUD

routes.get("/users", UserController.index);

routes.get("/users/:id", UserController.indexId);

routes.post("/users", UserController.store);

routes.put("/users/:id", UserController.update);

routes.delete("/users/:id", UserController.delete);

module.exports = routes;
