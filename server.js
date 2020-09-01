const express = require('express');
const cron = require('node-cron');
const fs = require('fs');

const app = express();

app.use(express.json({ extended: false }));

app.use('/', (req, res) => {
  res.send('API Running!');
});

const PORT = process.env.PORT || 5000;

cron.schedule('* * * * *', function () {
  console.log('running a task every minute');
});

app.listen(PORT, () => console.log(`Listening on port:${PORT}`));
