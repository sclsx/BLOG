const express = require("express")
const router = express.Router()


//check
router.post("/check", (req, res) => {
  res.send({
    code: 0,
    msg: "您拥有管理员权限"
  })
})

//友链相关
router.use("/link", require("./link"))

//文章相关
router.use("/article", require("./article"))

//contact
router.use("/contact", require("./contact"))


module.exports = router



