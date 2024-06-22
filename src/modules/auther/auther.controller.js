
import autherModel from "../../../db/models/auther.module.js"
import bookModel from "../../../db/models/book.module.js"

export const getAuthers=async(req,res,next)=>{
const auther=await autherModel.find()

res.status(200).json({msg:"done",auther})


}



export const getAutherById=async(req,res,next)=>{
   
    const auther=await autherModel.findById({_id:req.params.id})
    res.status(200).json({msg:"done",auther})
    
    
    }
    



export const createAuther=async(req,res,next)=>{


    try{

        const{name,bio,birthDate,books}=req.body

//         let bookExist=[]
//         for(let i=0;i<books.length;i++){
//     bookExist[i]=await bookModel.findById(books[i].id)
//     if(!bookExist[i]){ return res.status(200).json({msg:`book id of ${i} not exist`})
//     }
// }
    


        const auther=await autherModel.create({name,bio,birthDate,books})
        
       return res.status(200).json({msg:"done",auther})



    }catch(error){

        return res.status(400).json({msg:"fail",error})

    }

    
    
    }



    export const updateAutherById=async(req,res,next)=>{
   const{id,name,bio,birthDate,books}=req.body
        const auther=await autherModel.findByIdAndUpdate({_id:id},{name,bio,birthDate,books})
        res.status(200).json({msg:"done",auther})
        
        
        }


        
    export const deleteAutherById=async(req,res,next)=>{

             const auther=await autherModel.findByIdAndDelete({_id:req.params.id})
             if(auther){  return res.status(200).json({msg:"deleted",auther})}
             return res.status(200).json({msg:"not exist"})
   
          
             
             
             }
        
    