const { urlencoded } = require("express");
const express = require("express");
const app = express()
const port = 5000;
const router = require("./routes/index")

app.use(express.json())
app.use(express(urlencoded({ extended: false })))
app.use('/api/v1', router);


app.listen(port, () => {
  console.log(`listening to port:${port}`)
})