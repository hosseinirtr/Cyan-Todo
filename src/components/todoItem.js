import React, { useState } from "react";
import { Stack, Text, Checkbox, Input, Button } from "@chakra-ui/react";

export default function TodoItem({ todo, toggleTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.title);

  const handleTodoToggle = (id) => {
    toggleTodo(id);
  };

  const handleEditButtonClick = () => {
    setIsEditing(true);
    setEditText(todo.title);
  };

  const handleTitleClick = () => {
    setIsEditing(true);
    setEditText(todo.title);
  };

  const handleEditInputChange = (event) => {
    setEditText(event.target.value);
  };

  const handleEditInputKeyDown = (event) => {
    if (event.key === "Enter") {
      toggleTodo(todo.id, editText);
      setIsEditing(false);
    }
  };

  const handleCancelButtonClick = () => {
    setIsEditing(false);
  };

  return (
    <Stack key={todo.id} direction="row" align="center">
      {isEditing ? (
        <>
          <Input
            value={editText}
            onChange={handleEditInputChange}
            onKeyDown={handleEditInputKeyDown}
            autoFocus
            mr={2}
          />
          <Button onClick={handleCancelButtonClick}>Cancel</Button>
        </>
      ) : (
        <>
          <Text
            textDecoration={todo.completed ? "line-through" : "none"}
            flex={1}
            onClick={handleTitleClick}
            _hover={{ cursor: "pointer", textDecoration: "underline" }}
          >
            {todo.title}
          </Text>
          <Button onClick={handleEditButtonClick}>Edit</Button>
        </>
      )}
      <Checkbox
        isChecked={todo.completed}
        onChange={() => handleTodoToggle(todo.id)}
      />
    </Stack>
  );
}
