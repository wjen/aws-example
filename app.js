const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('hellloooo there second time');
});

const port = process.env.port || 3000;
app.listen(port, () => {
  console.log('app started wennnnn');
});
