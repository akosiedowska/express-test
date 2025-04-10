"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
// import { helloRouter } from './controllers/helloController';
const helloController_1 = require("./controllers/helloController");
// Load environment variables
dotenv_1.default.config();
// Initialize Express app
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
// Middlewares
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)({ origin: true, credentials: true }));
app.use(express_1.default.json());
// Routes
app.use('/hello', helloController_1.helloRouter);
// Root route
app.get('/', (req, res) => {
    res.send('Hello from the backend!');
});
// Server startup
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
exports.default = app;
