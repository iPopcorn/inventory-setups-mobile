"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const SetupsController_1 = __importDefault(require("../controllers/SetupsController"));
const router = express_1.default.Router();
router.get('/setups', SetupsController_1.default.getSetups);
module.exports = router;
