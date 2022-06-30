import express from "express";
import {
    createHizmet,
    updateHizmet,
    deleteHizmet,
    getOneHizmet,
    getAllHizmet,
  } from "../controllers/hizmetlerController.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// CREATE
router.post("/createhizmet", verifyAdmin, createHizmet);

// UPDATE
router.put("/:id", verifyAdmin, updateHizmet);

//DELETE
router.delete("/:id", verifyAdmin, deleteHizmet);

//GET
router.get("/:id", verifyUser, getOneHizmet);

//GET ALL sadece admin görüntüler
router.get("/", verifyUser, getAllHizmet);

export default router;