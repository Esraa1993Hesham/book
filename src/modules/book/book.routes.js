import { Router } from "express";
import * as BC from './book.controller.js'
const router=Router()


router.get("/",BC.getBooks)
router.get("/:id",BC.getBooksById)
router.get("/all",BC.getAll)
router.post("/",BC.createBook)
router.patch("/",BC.updateBooksById)
router.delete("/:id",BC.deleteBooksById)
export default router