import mongoose from "mongoose";

const connectionDB=async ()=>{
return await mongoose.connect("mongodb://localhost:27017/crudMongoos")
.then(()=>{
console.log("connected to database successfully")

}).catch((err)=>{
    console.log({msg:"failed to connected",err})
})

}
export default connectionDB