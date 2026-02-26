import React, { type ChangeEvent } from "react";

export const TaskForm = ({
  addTask,
}: {
  addTask: (taskName: string) => void;
}) => {
  const [name, setName] = React.useState("");

  const handleChange = (
    event: ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    setName(event.target.value);
  };

  return (
    <div className="flex gap-2">
      <div>
        <input
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      <button
        disabled={!name}
        className={
          !name
            ? "bg-blue-600 text-white px-6 py-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
            : ""
        }
        onClick={() => {
          addTask(name);
          setName("");
        }}
      >
        Создать
      </button>
    </div>
  );
};
