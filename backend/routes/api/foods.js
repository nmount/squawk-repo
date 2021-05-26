const express = require('express');
const asyncHandler = require('express-async-handler');
const { check, validationResult } = require('express-validator');

const { Food, Additive } = require('../../db/models');

const router = express.Router();

async function list() {
    return await Food.findAll();
}

async function create(details) {
    let additives = [];
    for (let i = 0; i < details.additives.length; i++) {
        additives.push(details.additives[i]);
    }
    const food = await Food.create(additives, { include: ["additives"] });
    return food.id;
  }

async function update(details) {
    const id = details.id;
    delete details.id;
    await Food.update(
      details,
      {
        where: { id },
      }
    );
    return id;
}

async function one(id) {
    return await Food.findByPk(id);
}

async function additivesByFoodId(foodId) {
    return await Additive.findAll({
      where: {
        foodId,
      },
    });
}

async function addItem(details, foodId) {
    const additive = await Additive.create({
      ...details,
      foodId,
    });
    return await Additive.findByPk(additive.id);
  }

router.get('/', asyncHandler(async function(_req, res) {
  const foods = await list();
  res.json(foods);
}));

router.post(
  '/',
  asyncHandler(async function (req, res) {
    const id = await create(req.body);
    res.redirect(`${req.baseUrl}/${id}`);
  })
);

router.put(
  '/:id',
  asyncHandler(async function (req, res) {
    const id = await update(req.body);
    const food = await one(id);
    res.json(food);
  })
);

router.get('/:id', asyncHandler(async function(req, res) {
  const food = await one(req.params.id);
  res.json(food);
}));

router.get('/:id/additives', asyncHandler(async function(req, res) {
  const additives = await additivesByFoodId(req.params.id);
  res.json(additives);
}));

router.post(
  '/:id/additives',
  asyncHandler(async function(req, res) {
    const additive = await addItem(req.body, req.params.id);
    res.json(additive);
  })
);

module.exports = router;
