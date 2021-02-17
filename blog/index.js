const express = require('express')//gọi đến thư mục express
const app = express()// khởi tạo function express
const port = 3000


//a route function
app.get('/home', (req, res) => {
    var a =1;
  return res.send('Hello World!')
})
//route function
// app.get('/', function(req, res) {
//     return res.send('hello word!!!!!!!!!!!!!!!!!')
// })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})