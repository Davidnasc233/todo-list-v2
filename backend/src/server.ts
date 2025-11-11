import express from 'express';
import todoRoutes from './routes/todoRoutes';

const app = express();
app.use(express.json());
app.use(todoRoutes);

app.listen(3333, () => {
  console.log('Servidor rodando!!!');
});
