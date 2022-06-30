import Hizmet from "../models/hizmetlerModel.js";

// CREATE
export const createHizmet = async (req, res, next) => {
    try {
      const newHizmet = new Hizmet({
        ...req.body,
      });
  
      await newHizmet.save();
      res.status(200).send("Hizmet ekleme işlemi basarili.");
    } catch (err) {
      next(err);
    }
  };

// UPDATE
export const updateHizmet = async (req,res,next)=>{
    try {
      const updateHizmet = await Hizmet.findByIdAndUpdate(
        req.params.id,
        { $set: req.body},
        { new: true }
      );
      res.status(200).json(updateHizmet);
    } catch (err) {
      next(err);
    }
  }

// DELETE
export const deleteHizmet = async (req,res,next)=>{
    try {
      await Hizmet.findByIdAndDelete(req.params.id);
      res.status(200).json("Hizmet silme basarili.");
    } catch (err) {
      next(err);
    }
}

// GET ONE
export const getOneHizmet = async (req,res,next)=>{
    try {
      const hizmet = await Hizmet.findById(req.params.id);
      res.status(200).json(hizmet);
    } catch (err) {
      next(err);
    }
}

// GET ALL
export const getAllHizmet = async (req,res,next)=>{
    try {
      const hizmetler = await Hizmet.find();
      res.status(200).json(hizmetler);
    } catch (err) {
      next(err);
    }
  }