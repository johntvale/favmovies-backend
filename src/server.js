require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');
const errorHandler = require('./middlewares/errorHandler');
const userRoutes = require('./routes/userRoutes');
const loginRoutes = require('./routes/loginRoutes');
const movieRoutes = require('./routes/movieRoutes');
const userMovieListRoutes = require('./routes/userMovieListRoutes');
const insightsRoutes = require('./routes/insightsRoutes');
const { NOT_FOUND } = require('./utils/httpStatusCode');
const userListInit = require('./config/userListInit');
const movieListInit = require('./config/movieListInit');
const dashboardInit = require('./config/dashboardInit');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:4200',
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],
    credentials: true
}));
app.use(cookieParser());

connectDB().then(async () => {
  console.log('Database connected successfully');
  await userListInit();
  await movieListInit();
  await dashboardInit();
}).catch((error) => {
  console.error('Error connecting to database: ', error);
});

app.get('/', (_req, res) => {
  res.send('API working!');
});

app.use('/users', userRoutes);
app.use('/movies', movieRoutes);
app.use('/lists', userMovieListRoutes);
app.use('/auth', loginRoutes);
app.use('/insights', insightsRoutes);

app.use((req, res) => {
  res.status(NOT_FOUND).json({
    error: 'Route not found',
    path: req.originalUrl
  });
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}
);

module.exports = app;