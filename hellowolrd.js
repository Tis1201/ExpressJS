const express = require('express');
const cors = require('cors')
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json())
//GET method
app.get('/hello' , (req, res) => {
    res.send('Hello world!')
})

//POST method
app.post('/hello', (req,res) => {
    res.send('Hello World!')
})

//GET method with param
app.get('/hello/:detail' , (req, res) => {
    const routeParams= req.params;
    const name = routeParams.detail;
    res.send('Response: Thong tin san pham ' + name)
})

//POST method with body
app.post('/hello/:cartShop', (req,res) => {
    const body = req.body;
    const productId = body.productId;
    const quantity = body.quantity;
    const price = body.price;

    const routeParams= req.params;
    const name = routeParams.cartShop;
    res.send('POST: Response: Da them product' + productId + 'vao gio hang ' + name + 'voi SL ' + quantity +  ' gia ' + '$' +price )
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})



