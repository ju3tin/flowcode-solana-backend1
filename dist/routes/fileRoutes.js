"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fileController_1 = require("../controllers/fileController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = express_1.default.Router();
router.get('/path/:projectId/:fileName', authMiddleware_1.authMiddleware, fileController_1.getFilePath);
router.get('/directory/:rootPath', authMiddleware_1.authMiddleware, fileController_1.getDirectoryStructure);
router.get('/tree/:id', authMiddleware_1.authMiddleware, fileController_1.getProjectFileTree);
router.get('/:projectId/:filePath(*)', authMiddleware_1.authMiddleware, fileController_1.getFileContent);
router.post('/:projectId/:filePath(*)', authMiddleware_1.authMiddleware, fileController_1.createFile);
router.put('/update/:projectId/:filePath(*)', authMiddleware_1.authMiddleware, fileController_1.updateFile);
router.delete('/:projectId/:filePath(*)', authMiddleware_1.authMiddleware, fileController_1.deleteFile);
router.delete('/:rootPath', authMiddleware_1.authMiddleware, fileController_1.deleteDirectory);
router.post('/rename-directory', authMiddleware_1.authMiddleware, fileController_1.renameDirectory);
router.post('/format-code', authMiddleware_1.authMiddleware, fileController_1.formatFiles);
exports.default = router;
