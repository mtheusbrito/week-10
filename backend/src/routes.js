const { Router } = require("express");
const routes = Router();
const DevController = require("./controllers/DevController");
const SearchController = require("./controllers/SearchController");
routes.get("/devs", DevController.index);
routes.post("/devs", DevController.store);
routes.put("/devs", DevController.update);
routes.delete("/devs", DevController.destroy);
routes.get("/search", SearchController.index);

module.exports = routes;
