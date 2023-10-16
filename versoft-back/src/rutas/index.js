const router = require("express").Router();

router.get("/", (req, res)=>{ res.json({mensaje:"ruta"})})


module.exports= router