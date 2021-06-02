import { Router } from "express";
import {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo,
} from "../controllers/todos/index";

const router: Router = Router();

router.get("/todos", getTodos);
router.post("/add-todo", addTodo);
router.put("/edit-todo/:todoId", updateTodo);
router.delete("/delete-todo/:todoId", deleteTodo);

export default router;
