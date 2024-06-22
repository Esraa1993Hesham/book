import { Router } from "express";
import * as AC from './auther.controller.js'
const router=Router()


router.get("/",AC.getAuthers)
router.get("/:id",AC.getAutherById)

router.post("/",AC.createAuther)
router.patch("/",AC.updateAutherById)
router.delete("/:id",AC.deleteAutherById)
export default router