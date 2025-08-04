const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/db');
const documentRoutes = require('./routes/documentRoutes');


dotenv.config();


connectDB();

const app = express();
const PORT = process.env.PORT || 5050;

app.use(cors({
  origin: "http://localhost:3000", // frontend origin
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/test', (req, res) => {
  res.send('Test route working');
});


app.use('/api/documents', documentRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
