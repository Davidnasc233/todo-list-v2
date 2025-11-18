import express from 'express';
import todoRoutes from './routes/todoRoutes';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(todoRoutes);

app.listen(3333, () => {
  console.log('Servidor rodando!!!');
});
