const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { check, validationResult } = require("express-validator");
const db = require('../../db/models');

const { Food } = db;

// router.get('/', asyncHandler(async(req, res) => {
//     const foods = await Food.findAll();

//     res.render("foods", { foods });
// }));

router.get("/", function (req, res) {
    res.send("Hello World!");
  });
