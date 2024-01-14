const express = require('express');
const router = express.Router();
const File = require('../models/files');

router.get('/:fileName', async (req, res) => {
  const fileName = req.params.fileName;

  try {
    const file = await File.findByPk(fileName);

    if (!file) {
      res.status(404).send('File not found');
      return;
    }

    const fileData = file.file_data;

    res.setHeader('Content-disposition', `attachment; filename=${fileName}`);
    res.setHeader('Content-type', 'application/octet-stream');
    res.send(fileData);
  } catch (error) {
    console.error('Error fetching file:', error);
    res.status(500).send('Error fetching file');
  }
});

module.exports = router;
