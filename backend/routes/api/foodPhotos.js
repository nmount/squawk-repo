const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const {FoodPhoto} = require ('../../db/models');
const Sequelize = require("sequelize");
const Op = Sequelize.Op

router.get('/', asyncHandler(async(req,res)=>{
    const foodPhotos = await FoodPhoto.findAll();

    res.json(foodPhotos);
}))

router.get('/:id',asyncHandler(async(req,res)=>{
    const id = req.params.id;
    const foodPhoto= await FoodPhoto.findByPk(id)
    res.json(foodPhoto)
}))

router.post('/',asyncHandler(async(req,res)=>{

    let { imageUrl, user_id, caption } = req.body;

    const newPhoto=await FoodPhoto.create({
      imageUrl,
      user_id,
      caption,
    });
    res.json(newPhoto)
}))

// router.delete('/:foodPhotoId', asyncHandler(req, res) => {

// })

module.exports = router;
