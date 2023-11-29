require("dotenv").config()
const express = require("express")

const Room = require("./models/Room")

const app = express()

app.set("view engine", "ejs")
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  res.render("index")
})

app.get("/room", async (req, res) => {
  let room = await Room.findOne({ name: req.query.name }) || await Room.create({ name: req.query.name, content: "" })

  res.render("room", { content: room.content, name: room.name })
})

app.post("/room", async (req, res) => {
  const room = await Room.findOneAndUpdate({ name: req.body.name }, { content: req.body.content }, { returnOriginal: false })

  res.render("room", { content: room.content, name: room.name })
})

app.listen(process.env.PORT, () => {
  console.log(`App listening at http://localhost:${process.env.PORT}`)
})