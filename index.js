require('dotenv').config()
const app = require("./app");

let port = process.env.PORT || 80;


app.listen(port, () => {
  console.log("Example app listening on port",port);
});