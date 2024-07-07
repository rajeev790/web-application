const express = require('express');
const multer = require('multer');
const { Storage } = require('@google-cloud/storage');
const File = require('../models/File');
const auth = require('../middleware/auth');

const router = express.Router();
const storage = new Storage();
const bucket = storage.bucket(process.env.GCLOUD_BUCKET);
const upload = multer({ dest: 'uploads/' });

router.post('/upload', auth, upload.single('file'), async (req, res) => {
  const { originalname, path } = req.file;
  await bucket.upload(path, {
    destination: uploads/${originalname},
  });
  const file = new File({ name: originalname, path: uploads/${originalname}, owner: req.userId });
  await file.save();
  res.status(201).json({ message: 'File uploaded' });
});

router.get('/files', auth, async (req, res) => {
  const files = await File.find({ owner: req.userId });
  res.json(files);
});

module.exports = router;