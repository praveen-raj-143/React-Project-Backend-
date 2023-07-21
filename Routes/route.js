// const route=require("express").Router()
// const bollywood=require("../dummy data/data")
// const hollywood=require("../dummy data/data")
// const technology=require("../dummy data/data")
// const fitness=require("../dummy data/data")
// const food=require("../dummy data/data")

// route.get("/bollywood",bollywood.bollywood)
// route.get("/hollywood",hollywood.hollywood)
// route.get("/technology",technology.technology)
// route.get("/fitness",fitness.fitness)
// route.get("/food",food.food)
const route=require("express").Router()

const controller = require("../Controller/action");

route.get("/",controller.allproduct)
// route.get("/hollywood",controller.hollywood)
// route.get("/technology",controller.technology)
// route.get("/fitness",controller.fitness)
// route.get("/food",controller.food)

module.exports=route;
