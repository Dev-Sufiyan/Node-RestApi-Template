const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'temp/uploads/' });
const fs = require('fs');

function saveRoute(connection) {
  router.post('/', upload.single('file'), (req, res) => {

    if (!req.body || !req.body.file_name || !req.file) {
      res.status(400).send('Invalid request data');
      return;
    }
    const { file_name} = req.body;
    const filePath = req.file.path;

    fs.readFile(filePath, (err, fileData) => {
      if (err) {
        console.error('Error reading file:', err);
        res.status(500).send('Error reading file');
        return;
      }
      fs.unlink(filePath, (unlinkErr) => {
        if (unlinkErr) {
          console.error('Error deleting file:', unlinkErr);
        }
      });
      // Query to insert image into the database
    const query = 'INSERT INTO files (file_name, file_data) VALUES (?, ?)';

    connection.query(query, [file_name, fileData], (err, results) => {
        if (err) {
          console.error('Error saving image:', err);
          res.status(500).send('Error saving image');
          return;
        }

        res.status(200).send('File saved successfully');
      });
    });
    });
  return router;
}

module.exports = saveRoute;
