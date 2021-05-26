const { commerce } = require("faker");
const { Food } = require("./models");

function random100() {
  return Math.floor(Math.random() * 100) + 1;
}

function randomImage() {
  const images = [
    "/images/Food_berry.svg",
    "/images/Food_egg.svg",
    "/images/Food_potion.svg",
    "/images/Food_super_potion.svg",
  ];
  const index = Math.floor(Math.random() * images.length);
  return images[index];
}

function* generateItems() {
  for (let i = 0; i < 3; i += 1) {
    yield {
      name: commerce.productName(),
      price: random100(),
      happiness: random100(),
      imageUrl: randomImage(),
    };
  }
}

async function create(additives) {
  additives.items = [...generateItems()];
  const Food = await Food.create(additives, { include: ["items"] });
  return Food.id;
}

async function update(additives) {
  const id = additives.id;
  delete additives.id;
  await Food.update(
    additives,
    {
      where: { id }
    }
  );
  return id;
}

async function list() {
  return await Food.findAll();
}

async function one(id) {
  return await Food.findByPk(id);
}

module.exports = {
  create,
  update,
  list,
  one,
};
