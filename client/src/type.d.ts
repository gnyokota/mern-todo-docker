interface TodoI {
  _id: string;
  name: string;
  description: string;
  status: boolean;
  createdAt?: string;
  updateAt?: string;
}

interface TodoProps {
  todo: TodoI;
}

type ApiDataType = {
  message: string;
  status: string;
  todo?: TodoI;
  todos: TodoI[];
};
