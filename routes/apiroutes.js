const unirest = require("unirest");
const router = require("express").Router();
const ENV = require('dotenv');
ENV.config();

router.get("/recipes", (req, res) => {
  console.log(req.query)
  unirest
    .get(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/searchComplex?query=${req.query.q}&limitLicense=false&ranking=2&offset=0&number=10&instructionsRequired=true`)
    .header("X-Mashape-Key", process.env.FOOD_API)
    .header("X-Mashape-Host", "spoonacular-recipe-food-nutrition-v1.p.mashape.com")
    .end(function (result) {
  console.log(result.body);
      res.send(result.body);
});
})


router.get("/recipes/:id", (req, res) => {
  console.log(req.params)
  unirest
    .get(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/${req.params.id}/information`)
    .header("X-Mashape-Key", process.env.FOOD_API)
    .header("X-Mashape-Host", "spoonacular-recipe-food-nutrition-v1.p.mashape.com")
    .end(function (result) {
  console.log(result.body);
      res.send(result.body);
});
})

module.exports = router;