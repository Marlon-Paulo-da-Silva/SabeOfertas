const express = require("express");
const SessionController = require("./controllers/SessionController");
const OfferController = require("./controllers/OfferController");

const routes = express.Router();

routes.post("/sessions", SessionController.store);
routes.post("/offers", OfferController.store);

module.exports = routes;
