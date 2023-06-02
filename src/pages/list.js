import React, { useEffect, useState } from "react";
import { addTodo, getTodos } from "../redux/actions/todoActions";
import { connect } from "react-redux";
import { useSelector, shallowEqual } from "react-redux";
import TodoItem from "../components/todoItem";
import {
  Stack,
  Text,
  Heading,
  Box,
  Input,
  Checkbox,
  Button,
} from "@chakra-ui/react";

export function List({ getTodos, addTodo }) {
  const { todos } = useSelector((data) => data.todo, shallowEqual);

  useEffect(() => {
    getTodos();
  }, []);

  const [newTodo, setNewTodo] = useState("");

  const handleNewTodoChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleNewTodoAdd = () => {
    const value = newTodo.trim();

    if (value) {
      addTodo({ title: value, completed: false });
      setNewTodo("");
    }
  };

  return (
    <Box maxW="md" mx="auto" mt={8} p={4}>
      <Heading as="h1" mb={4}>
        Todo List
      </Heading>

      <Stack spacing={4}>
        <Input
          placeholder="Add a new todo"
          value={newTodo}
          onChange={handleNewTodoChange}
        />
        <Button onClick={handleNewTodoAdd}>Add</Button>

        {todos &&
          todos.map((todo) => (
            <Stack key={todo.id} direction="row" align="center">
              <Text
                textDecoration={todo.completed ? "line-through" : "none"}
                flex={1}
              >
                {todo.title}
              </Text>
              <Checkbox isChecked={todo.completed} />
            </Stack>
          ))}
      </Stack>
    </Box>
  );
}

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = {
  getTodos,
  addTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
