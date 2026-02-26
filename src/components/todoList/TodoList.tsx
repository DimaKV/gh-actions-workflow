import React from "react";
import { TaskForm } from "./TaskForm";

type TTodo = {
  name: string;
  ready: boolean;
  id: number;
};

export const TodoList = () => {
  const [list, setList] = React.useState<TTodo[]>([
    { name: "Task1", ready: true, id: 1 },
    { name: "Task2", ready: false, id: 2 },
  ]);

  const addTask = (taskName: string) => {
    setList([
      ...list,
      { name: taskName, ready: false, id: (list?.at(-1)?.id || 0) + 1 },
    ]);
  };

  const handleChangeStatus = (id: number) => {
    setList(
      list.map((todo) =>
        todo.id === id ? { ...todo, ready: !todo.ready } : todo,
      ),
    );
  };

  return (
    <div>
      <div>
        <TaskForm addTask={addTask} />
      </div>
      <div>
        <ul>
          {list.map((todo) => {
            const classItem = todo.ready
              ? "line-through text-gray-500 flex items-center gap-2"
              : "text-green-600 flex items-center gap-2";
            return (
              <li key={todo.id} className={classItem}>
                <input
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  checked={todo.ready}
                  onChange={() => handleChangeStatus(todo.id)}
                />
                {todo.name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
