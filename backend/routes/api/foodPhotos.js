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

    let { imageUrl, user_id, food_id, caption } = req.body;

    food_id;
    const newPhoto=await FoodPhoto.create({
      imageUrl,
      user_id,
      food_id,
      caption,
    });
    res.json(newPhoto)
}))

router.get('/search/:searchContent', asyncHandler(async(req,res)=>{
    const searchContent = req.params.searchContent;
    const foodPhotos=await FoodPhoto.findAll({
        where:{
            caption:{
                [Op.substring]:searchContent
            }
        }
    })
    res.json(foodPhotos);
}))

module.exports = router;
