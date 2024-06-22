import {Schema,model}from "mongoose";

const bookSchemaa=new Schema({
title:{
    type:String,
    required:true
},
content:{
    type:String,
    required:true
},
auther:{
    type:Schema.Types.String,
    required:true,
    ref:"auther"

},
publishedDate:{type:Date,
    default:new Date()


}



})

 const bookModel=model("book",bookSchemaa)
 export default bookModel
