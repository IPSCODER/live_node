const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser")
const cors = require("cors")
const bodyParser = require("body-parser");

const app = express();
app.use(cors({
  origin:["http://localhost:3000"],
  methods:["POST","GET"],
  credentials:true
}));
app.use(cookieParser())
app.use(express.json());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(session({
  secret:"secret",
  resave:false,
  saveUninitialized:false,
  cookie:{
    secure:false,
    maxAge:1000 * 60 * 60 *24
  }
}))


app.use("/",(req,res)=>{
    res.send({message:"succufuly running server two"})   
})


app.listen(5100)
