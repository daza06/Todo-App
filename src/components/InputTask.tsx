import React from "react";

const InputTask = () => {
  return (
    <form className="input">
      <input type="input" placeholder="Enter a task" />
      <button type="submit">+</button>
    </form>
  );
};

export default InputTask;
