import { Router } from "express";
import { SettingsController } from "./Controllers/SettingsControllers";

const routes = Router();

const settingsController = new SettingsController();

routes.post("/settings", settingsController.create);

export { routes };