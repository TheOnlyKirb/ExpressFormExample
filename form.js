const express = require('express'),
router = express.Router(); //imports the router here

router.get("/", async (req, res) => { // if the page is "/" or none specified, run the code below
res.render("page.ejs", {header: req.headers["user-agent"]}) // tells express to render the html file page.ejs with the useragent variable
})
router.post("/form", async (req, res) => {
console.log(req.body)
res.render("sent.ejs", {data: req.body}) // tells express to render sent.ejs when you finish submitting the form
})

module.exports = router; // export the router so express can use it!