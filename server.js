const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname)));
app.use(express.json());

const dataPath = path.join(__dirname, 'data', 'updates.json');

app.get('/api/updates', (req, res) => {
  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading data');
    } else {
      const updates = JSON.parse(data);
      updates.today += 1; // 방문할 때마다 today 카운트 증가
      updates.total += 1; // 방문할 때마다 total 카운트 증가
      
      fs.writeFile(dataPath, JSON.stringify(updates, null, 2), (err) => {
        if (err) console.error('Error writing data:', err);
      });
      
      res.json(updates);
    }
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});