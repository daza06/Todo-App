import React, { useState } from "react";

export interface Task {
  id: number;
  name: string;
  description: string;
}
interface InputTaskProps {
  onAddTask: (task: { name: string; description: string }) => void;
}

const InputTask: React.FC<InputTaskProps> = ({ onAddTask }) => {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  // handle submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // prevent page reload

    // call onAddTask function passed via props
    if (name && description) {
      onAddTask({ name, description });
      setName(""); // clear name input after submission
      setDescription(""); // clear description input after submission
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter a task"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Task description"
      />
      <button className="submit" type="submit">
        +
      </button>
    </form>
  );
};

export default InputTask;
