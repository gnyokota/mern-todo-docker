const baseUrl: string = "http://localhost:8080";

export const getTodos = async (): Promise<ApiDataType> => {
  try {
    const response = await fetch(`${baseUrl}/todos`);
    const todos = await response.json();
    return todos;
  } catch (error) {
    throw new Error(error);
  }
};

export const addTodo = async (formData: TodoI): Promise<ApiDataType> => {
  try {
    const todo: Omit<TodoI, "_id"> = {
      name: formData.name,
      description: formData.description,
      status: false,
    };
    const settings = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todo),
    };

    const response = await fetch(`${baseUrl}/add-todo`, settings);
    const saveTodo = response.json();
    return saveTodo;
  } catch (error) {
    throw new Error(error);
  }
};

export const updateTodo = async (todo: TodoI): Promise<ApiDataType> => {
  try {
    const todoUpdate: Pick<TodoI, "status"> = { status: true };
    const settings = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todoUpdate),
    };

    const response = await fetch(`${baseUrl}/edit-todo/${todo._id}`, settings);
    const updatedTodo = response.json();
    return updatedTodo;
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteTodo = async (_id: string): Promise<ApiDataType> => {
  try {
    const settings = {
      method: "DELETE",
    };
    const response = await fetch(`${baseUrl}/delete-todo/${_id}`, settings);
    const deletedTodo = response.json();
    return deletedTodo;
  } catch (error) {
    throw new Error(error);
  }
};
