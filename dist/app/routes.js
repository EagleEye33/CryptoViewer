"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const subscriptionController_1 = require("./controllers/subscriptionController");
const initializeRoutes = (app) => {
    app.post('/subscription', subscriptionController_1.post);
};
exports.default = initializeRoutes;
//# sourceMappingURL=routes.js.map