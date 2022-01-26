import React, { CSSProperties } from "react";
import { Todo } from "../modules/todos";

type TodoItemProps = {
  todo: Todo;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
};

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onRemove }) => {
  const textStyle: CSSProperties = {
    textDecoration: todo.done ? "line-through" : "none",
  };
  console.log(todo);

  const removeStyle: CSSProperties = {
    marginLeft: 8,
    color: "red",
  };

  const handleToggle = () => {
    onToggle(todo.id);
  };

  const handleRemove = () => {
    onRemove(todo.id);
  };

  return (
    <li>
      <span onClick={handleToggle} style={textStyle}>
        {todo.text}
      </span>
      <span onClick={handleRemove} style={removeStyle}>
        (X)
      </span>
    </li>
  );
};

export default TodoItem;
