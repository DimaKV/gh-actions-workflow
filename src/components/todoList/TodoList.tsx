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

  return (
    <div>
      <div>
        <TaskForm addTask={addTask} />
      </div>
      <div>
        <ul>
          {list.map((todo) => {
            const classItem = todo.ready
              ? "line-through text-gray-500"
              : "text-green-600";
            return (
              <li key={todo.id} className={classItem}>
                {todo.name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
