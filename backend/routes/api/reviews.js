const express = require("express");
const asyncHandler = require("express-async-handler");
const router = express.Router();
const {Review} = require('../../db/models');


router.get('/:foodPhotoId',asyncHandler(async(req,res)=>{
    const foodPhotoId=req.params.foodPhotoId;

    const bodies = await Review.findAll({
        where:{foodPhotoId}
    })
    res.json(bodies);
}))

router.post('/:foodPhotoId',asyncHandler(async(req,res)=>{
    const foodPhotoId=req.params.foodPhotoId
    const {newBody,user_id,id}=req.body;
    const review=newBody;
    const body = await Review.create({review,user_id,foodPhotoId})

    return res.json(body)

}))


module.exports = router;
