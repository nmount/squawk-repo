const express = require("express");
const router = express();
const asyncHandler = require("express-async-handler");

const { Additive } = require('../../db/models');

async function updateAdditive(details) {
    const id = details.id;
    delete details.id;
    console.log({ details, id });
    await Additive.update(
      details,
      {
        where: { id }
      }
    );
    return await Additive.findByPk(id);
}

async function deleteAdditive(additiveId) {
    const additive = await Additive.findByPk(additiveId);
    if (!additive) throw new Error('Cannot find additive');

    await Additive.destroy({ where: { id: additive.id }});
    return additive.id;
}

router.put(
    "/:id",
    asyncHandler(async function (req, res) {
      const additive = await updateAdditive(req.body);
      return res.json(additive);
    })
);

router.delete("/:id", asyncHandler(async function (req, res) {
    const additiveId = await deleteAdditive(req.params.id);
    return res.json({ additiveId });
}));

module.exports = router;
