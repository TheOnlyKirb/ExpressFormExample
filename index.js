const express = require("express"), // imports the express module, or "requires" it
app = express(), // creates the express application, or creates the site
http = require("http"), // imports NodeJS's http client
server = http.createServer(app) // launches the webserver / website
app.use(express.json()) // makes the form data readable in json format (parses it)
    .use(express.urlencoded({extended: false})) // just sets what library to use for URL-Encoded data. Don't worry much about this.

    app.use('/', require("./form.js"))

server.listen("8080")
console.log("Webserver listening on port 8080")