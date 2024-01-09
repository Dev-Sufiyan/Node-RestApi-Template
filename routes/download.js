const express = require('express');
const router = express.Router();

// Route to download file by name
function downloadRoute(connection) {
  router.get('/:fileName', (req, res) => {
    const fileName = req.params.fileName;

    // Query to retrieve file data based on file name
    const query = 'SELECT file_data FROM files WHERE file_name = ?';

    connection.query(query, [fileName], (err, results) => {
      if (err) {
        console.error('Error fetching file:', err);
        res.status(500).send('Error fetching file');
        return;
      }

      if (results.length === 0) {
        res.status(404).send('File not found');
        return;
      }

      const fileData = results[0].file_data;

      // Send the file as a response
      res.setHeader('Content-disposition', `attachment; filename=${fileName}`);
      res.setHeader('Content-type', 'application/octet-stream');
      res.send(fileData);
    });
  });

  return router;
}

module.exports = downloadRoute;
