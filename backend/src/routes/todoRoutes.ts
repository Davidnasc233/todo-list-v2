import Router from 'express';
import * as controller from '../controllers/todoController';

const router = Router();

router.get('/tasks', controller.getTasks);
router.post('/tasks', controller.createTask);
router.put('/tasks/:id', controller.updateTask);
router.delete('/tasks/:id', controller.deleteTask);

export default router;
