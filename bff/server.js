const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sendMail = require('./mailer');
const whatsApp = require('./controller/whatsApp');
require('dotenv').config();
const app = express();

app.use(cors({ origin: '*', credentials: true, methods: 'GET, POST' }));
const port = process.env.PORT || 8080;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`Hello World! ${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`)
})

app.post('/createLead',  async (req, res) => {
  if (!req.body.emailTo) {
    return res.status(400).json({ status: `Error`, message: `Invalid request` })
  }
  await sendMail(req, res);
  await whatsApp(req, res);
  return res.status(200).json({
    message: 'Lead created successfully',
    status: "success",
    data: req.body
  })
})

app.post('/sendMail',  async (req, res) => {
  if (!req.body.emailTo) {
    return res.status(400).json({ status: `Error`, message: `Invalid request` })
  }
  await sendMail(req)
  return res.status(200).json({
    message: 'Mail sent successfully',
    status: "success",
    data: req.body
  })
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
