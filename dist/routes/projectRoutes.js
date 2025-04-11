"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const projectController_1 = require("../controllers/projectController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const projectController_2 = require("../controllers/projectController");
const router = express_1.default.Router();
router.post('/run-command', authMiddleware_1.authMiddleware, projectController_1.runCommandController);
router.post('/compile-ts', authMiddleware_1.authMiddleware, projectController_1.compileTsController);
router.post('/create', authMiddleware_1.authMiddleware, projectController_1.createProject);
router.post('/create-project-directory', authMiddleware_1.authMiddleware, projectController_1.createProjectDirectory);
router.put('/update/:id', authMiddleware_1.authMiddleware, projectController_1.editProject);
router.get('/details/:id', authMiddleware_1.authMiddleware, projectController_1.getProjectDetails);
router.delete('/:id', authMiddleware_1.authMiddleware, projectController_1.deleteProject);
router.post('/:id/start-container', authMiddleware_1.authMiddleware, projectController_1.startContainer);
router.post('/init', authMiddleware_1.authMiddleware, projectController_1.anchorInitProject);
router.post('/:id/set-cluster', authMiddleware_1.authMiddleware, projectController_1.setCluster);
router.post('/:id/build', authMiddleware_1.authMiddleware, projectController_2.buildProject);
router.get('/:id/build-artifact', authMiddleware_1.authMiddleware, projectController_2.getBuildArtifact);
router.post('/:id/deploy', authMiddleware_1.authMiddleware, projectController_1.deployProject);
router.post('/:id/test', authMiddleware_1.authMiddleware, projectController_2.testProject);
router.post('/:id/run-command', authMiddleware_1.authMiddleware, projectController_1.runProjectCommand);
router.post('/:id/run-script', authMiddleware_1.authMiddleware, projectController_1.runProjectCommand);
router.post('/:id/install-packages', authMiddleware_1.authMiddleware, projectController_1.installPackages);
router.post('/:id/ephemeral', authMiddleware_1.authMiddleware, projectController_1.createEphemeralKeypair);
router.post('/:projectId/install-node-dependencies', authMiddleware_1.authMiddleware, projectController_1.installNodeDependencies);
exports.default = router;
