import React, { useEffect, useState } from "react";
import { getTodos, addTodo, updateTodo, deleteTodo } from "./Api";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";

const App: React.FC = () => {
  const [todos, setTodos] = useState<TodoI[]>([]);

  const fecthTodos = async () => {
    try {
      const response = await getTodos();
      setTodos(response.todos);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fecthTodos();
  }, []);

  const handleSaveTodo = async (
    e: React.FormEvent,
    formData: TodoI | {} | undefined
  ) => {
    e.preventDefault();
    try {
      const response = await addTodo(formData as TodoI);
      setTodos(response.todos);
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdateTodo = async (todo: TodoI) => {
    try {
      const response = await updateTodo(todo);
      setTodos(response.todos);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteTodo = async (_id: string) => {
    try {
      const response = await deleteTodo(_id);
      setTodos(response.todos);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <main className="App">
      <h1>Todo List</h1>
      <AddTodo saveTodo={handleSaveTodo} />
      {todos.map((todo: TodoI) => (
        <TodoItem
          key={todo._id}
          todo={todo}
          updateTodo={handleUpdateTodo}
          deleteTodo={handleDeleteTodo}
        />
      ))}
    </main>
  );
};

export default App;
