const express = require("express");
const multer = require("multer");
const uploadConfig = require("./config/upload");

const SessionController = require("./controllers/SessionController");
const OfferController = require("./controllers/OfferController");

const routes = express.Router();

const upload = multer(uploadConfig);

routes.post("/sessions", SessionController.store);
routes.get("/offers", OfferController.index);
routes.post("/offers", upload.single("thumbnail"), OfferController.store);

module.exports = routes;
