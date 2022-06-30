import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        nameAndSurname:{type: String, required: true},
        email:{type: String, required:true,unique:true},
        password:{type: String, required:true},
        isMadmin:{type:Boolean, default:false},
    },
    {timestamps:true}
)

export default mongoose.model("User", UserSchema);

