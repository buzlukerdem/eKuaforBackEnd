import mongoose from "mongoose";

const HizmetSchema = new mongoose.Schema(
    {
        title:{type: String, required: true, unique:true},
        desc:{type: String, required:true},
        price:{type: Number, required:true},
        img:{type: String},
        //categories:{type: String, required:true}, sonra belki
    },
    {timestamps:true}
)

export default mongoose.model("Hizmet", HizmetSchema);
