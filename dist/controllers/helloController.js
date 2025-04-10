"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloRouter = void 0;
const express_1 = require("express");
exports.helloRouter = (0, express_1.Router)();
// Sample route
exports.helloRouter.get('/', (req, res) => {
    res.json({ message: 'Hello from the Hello World route!' });
});
// export { helloRouter };
