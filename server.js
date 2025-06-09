// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const todosRoutes = require('./routes/todos');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use('/api/todos', todosRoutes);

// Отдача фронта
app.use(express.static('public'));

mongoose.connect('mongodb+srv://andreydnepr1995:pE2XjGeGIiBIoQAe@cluster0.ib8nn7l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
  })
  .catch(err => console.error(err));
