import { Response, Request } from "express";
import { TodoI } from "../../types/todo";
import Todo from "../../models/todo";

export const getTodos = async (req: Request, res: Response): Promise<void> => {
  try {
    const todos: TodoI[] = await Todo.find();
    res.status(200).json({ todos });
  } catch (err) {
    throw err;
  }
};

//Pick:Constructs a type by picking the set of properties Keys (string literal or union of string literals) from Type.
export const addTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as Pick<TodoI, "name" | "description" | "status">;
    const todo: TodoI = new Todo({
      name: body.name,
      description: body.description,
      status: body.status,
    });

    const newTodo: TodoI = await todo.save();
    const allTodos: TodoI[] = await Todo.find();
    res
      .status(201)
      .json({ message: "Todo added", todo: newTodo, todos: allTodos });
  } catch (err) {
    throw err;
  }
};

export const updateTodo = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = req.params.todoId;
    const body = req.body;

    const updatedTodo: TodoI | null = await Todo.findByIdAndUpdate(
      { _id: id },
      body
    );
    const allTodos: TodoI[] = await Todo.find();
    res
      .status(200)
      .json({ message: "Todo updated", todo: updatedTodo, todos: allTodos });
  } catch (err) {
    throw err;
  }
};

export const deleteTodo = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const deletedTodo: TodoI | null = await Todo.findByIdAndDelete(
      req.params.todoId
    );
    const allTodos: TodoI[] = await Todo.find();
    res
      .status(200)
      .json({ message: "Todo deleted", todo: deletedTodo, todos: allTodos });
  } catch (err) {
    throw err;
  }
};
