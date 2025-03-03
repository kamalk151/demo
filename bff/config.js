const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/createLead', (req, res) => {
  console.log('Request Body:', req.body)

  res.json({
    status: 200,
    message: 'Lead created successfully',
    data: req.body
  })
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
