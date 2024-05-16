// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const Assistant = require('./models/Assistant');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = 'mongodb://localhost:27017/assistantDB';

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

app.use(bodyParser.json());

// Create assistant
app.post('/api/assistants', async (req, res) => {
  try {
    const assistant = new Assistant(req.body);
    await assistant.save();
    res.status(201).send(assistant);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Get all assistants
app.get('/api/assistants', async (req, res) => {
  try {
    const assistants = await Assistant.find();
    res.send(assistants);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Get assistant by ID
app.get('/api/assistants/:id', async (req, res) => {
  try {
    const assistant = await Assistant.findById(req.params.id);
    if (!assistant) {
      return res.status(404).send({ error: 'Assistant not found' });
    }
    res.send(assistant);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Update assistant by ID
app.put('/api/assistants/:id', async (req, res) => {
  try {
    const assistant = await Assistant.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!assistant) {
      return res.status(404).send({ error: 'Assistant not found' });
    }
    res.send(assistant);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Delete assistant by ID
app.delete('/api/assistants/:id', async (req, res) => {
  try {
    const assistant = await Assistant.findByIdAndDelete(req.params.id);
    if (!assistant) {
      return res.status(404).send({ error: 'Assistant not found' });
    }
    res.send(assistant);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
