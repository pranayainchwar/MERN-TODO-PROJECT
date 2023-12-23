import express from 'express';
import { addTodo , getAllTodos, toggleTodoDone, updateTodo, deleteTodo} from '../controller/todo-contoller.js';

const routes = express.Router();

routes.post("/todos", addTodo);
routes.get("/todos", getAllTodos);
routes.get("/todos/:id", toggleTodoDone);
routes.put("/todos/:id", updateTodo);
routes.delete("/todos/:id", deleteTodo);

export default routes;