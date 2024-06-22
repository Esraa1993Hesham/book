import {Schema,model}from "mongoose";

const autherSchema=new Schema({
name:{
    type:String,
    required:true
},
bio:{
    type:String



},
birthDate:{type:Date

},
books:{
    type:Schema.Types.Array,
    ref:"book"
}



})

 const autherModel=model("auther",autherSchema)
 export default autherModel
