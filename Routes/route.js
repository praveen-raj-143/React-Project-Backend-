const route=require("express").Router()
const bollywood=require("../dummy data/data")
const hollywood=require("../dummy data/data")
const technology=require("../dummy data/data")
const fitness=require("../dummy data/data")
const food=require("../dummy data/data")

route.get("/bollywood",bollywood.bollywood)
route.get("/hollywood",hollywood.hollywood)
route.get("/technology",technology.technology)
route.get("/fitness",fitness.fitness)
route.get("/food",food.food)

module.exports=route;