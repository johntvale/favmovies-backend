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
const initUser = require('./config/userInit');
const { NOT_FOUND } = require('./utils/httpStatusCode');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:4200',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    credentials: true
}));
app.use(cookieParser());

connectDB().then(() => {
  console.log('Banco de dados conectado com sucesso!');
  initUser();
}).catch((error) => {
  console.error('Erro ao conectar ao banco de dados:', error);
});

app.get('/', (_req, res) => {
  res.send('API funcionando!');
});

app.use('/users', userRoutes);
app.use('/movies', movieRoutes);
app.use('/lists', userMovieListRoutes);
app.use('/auth', loginRoutes);

app.use((req, res) => {
  res.status(NOT_FOUND).json({
    error: 'Rota não encontrada',
    path: req.originalUrl
  });
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
}
);

module.exports = app;