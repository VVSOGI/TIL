import React, { FormEvent, useState } from "react";

type TodoInsertProps = {
  onInsert: (text: string) => void;
};
const TodoInsert: React.FC<TodoInsertProps> = ({ onInsert }) => {
  const [value, setValue] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onInsert(value);
    setValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input placeholder="What's next?" value={value} onChange={onChange} />
      <button type="submit">POST</button>
    </form>
  );
};

export default TodoInsert;
