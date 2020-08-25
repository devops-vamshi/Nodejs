const express = require ('express');
const app = express()

app.get('/',(req, res) => res.send('hello krish !'));


app.listen(3000,() => {
 console.log('my REST API running on port 3000!');
})
