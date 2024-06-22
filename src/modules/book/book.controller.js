
import bookModel from "../../../db/models/book.module.js"

export const getBooks=async(req,res,next)=>{
const books=await bookModel.find()
res.status(200).json({msg:"done",books})


}


export const getBooksById=async(req,res,next)=>{
   
    const books=await bookModel.findById({_id:req.params.id})
    res.status(200).json({msg:"done",books})
    
    
    }

    
export const getAll=async(req,res,next)=>{
   
    const books=await bookModel.find({}).populate("auther","name")
    res.status(200).json({msg:"done",books})
    
    
    }


    



export const createBook=async(req,res,next)=>{


    try{

        const{title,content,auther,puplishedDate}=req.body
        if(title && content && auther){
        const books=await bookModel.create({title,content,auther,puplishedDate})
        
       return res.status(200).json({msg:"done",books})}
    else{return res.status(200).json({msg:"title and content and auther are required fields"})}


    }catch(error){

        return res.status(400).json({msg:"fail",error})

    }

    
    
    }



    export const updateBooksById=async(req,res,next)=>{
   const{id,content,auther,puplishedDate,title}=req.body
        const books=await bookModel.findByIdAndUpdate({_id:id},{title,content,auther,puplishedDate})
        res.status(200).json({msg:"done",books})
        
        
        }


        
    export const deleteBooksById=async(req,res,next)=>{

             const books=await bookModel.findByIdAndDelete({_id:req.params.id})
             if(books){  return res.status(200).json({msg:"deleted",books})}
             return res.status(200).json({msg:"not exist"})
   
          
             
             
             }
        
    