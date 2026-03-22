import express from "express"

const app = express()

//basic configuration
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))

app.get("/", (req, res) => {
  res.send("welcome to ProjectCampy !!");
});

app.get("/instagram", (req, res) => {
  res.send("this is an instagram page");
});

export default app