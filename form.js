const express = require('express'),
router = express.Router();

router.get("/", async (req, res) => {
res.render("page.ejs", {header: req.headers["user-agent"]})
})
router.post("/form", async (req, res) => {
console.log(req.body)
res.render("sent.ejs", {data: req.body})
})

module.exports = router;