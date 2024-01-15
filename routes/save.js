const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'temp/uploads/' });
const fs = require('fs').promises;
const File = require('../models/files');
const errorhandler = require('../util/errorHandler');

router.post('/', upload.single('file'), async (req, res) => {
  try {
    if (!req.body || !req.body.file_name || !req.file) {
      res.status(400).send('Invalid request data');
      return;
    }

    const { file_name } = req.body;
    const filePath = req.file.path;

    const fileData = await fs.readFile(filePath, { encoding: null });

    // Delete the file after reading
    await fs.unlink(filePath);

    await File.create({
      file_name,
      file_data: fileData,
    });

    res.status(200).send('File saved successfully');
  } catch (error) {
    res.status(500).send(errorhandler(error));
  }
});

module.exports = router;
