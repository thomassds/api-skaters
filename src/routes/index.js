const { Router } = require("express");

const SkatistaController = require("../controllers/SkatistaController");

const routes = Router();

routes.get("/skatistas/", SkatistaController.getAllSkaters);

routes.get("/skatista/:name/", SkatistaController.getOneSkaterByName);

module.exports = routes;
