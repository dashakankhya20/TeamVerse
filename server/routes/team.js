import express from "express";
import {
  getTeamById,
  createNewTeam,
  updateTeam,
  deleteTeam,
} from "../controllers/team.js";
const router = express.Router();

router.get("/:id", getTeamById);
router.post("/", createNewTeam);
router.put("/:id", updateTeam);
router.delete("/:id", deleteTeam);

export default router;
