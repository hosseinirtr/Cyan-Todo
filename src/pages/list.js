import React, { useState } from "react";
import { addTodo, getTodos, toggleTodo } from "../redux/actions/todoActions";
import { connect } from "react-redux";
import { useSelector, shallowEqual } from "react-redux";
import TodoItem from "../components/todoItem";
import {
  Stack,
  Text,
  Heading,
  Box,
  Input,
  Button,
  VStack,
  HStack,
  Avatar,
} from "@chakra-ui/react";
import { WarningTwoIcon, CheckCircleIcon } from "@chakra-ui/icons";
import Profile from "../components/profile";

export function List({ getTodos, addTodo, toggleTodo }) {
  const { todos } = useSelector((data) => data.todo, shallowEqual);
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

  const completedTodos = todos ? todos.filter((todo) => todo.completed) : [];
  const notCompletedTodos = todos
    ? todos.filter((todo) => !todo.completed)
    : [];

  return (
    <Box maxW="max" mx="auto" mt={8} p={4}>
      <Profile />
      <Stack spacing={4}>
        <Input
          placeholder="Add a new todo"
          value={newTodo}
          onChange={handleNewTodoChange}
        />
        <Button
          onClick={handleNewTodoAdd}
          disabled={!newTodo}
          backgroundColor={"#e9ffff"}
        >
          Add
        </Button>

        <Stack spacing={"24"} direction="row">
          <VStack spacing={8} justifyContent="space-between">
            {notCompletedTodos?.length > 0 ? (
              <VStack align="stretch" flex={1} p={4}>
                <Text fontWeight="bold" mb={2}>
                  Not Completed
                </Text>

                {notCompletedTodos.map((todo) => (
                  <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
                ))}
              </VStack>
            ) : (
              <VStack align="stretch" flex={1} p={4}>
                <Text fontWeight="bold" mb={2}>
                  Not Completed
                </Text>
                {completedTodos?.length === todos?.length && (
                  <Box color="green.500" display="flex" alignItems="center">
                    <CheckCircleIcon mr={2} />
                    Everything is done
                  </Box>
                )}
              </VStack>
            )}
          </VStack>
          <VStack align="stretch" flex={1} p={4}>
            <Text fontWeight="bold" mb={2}>
              Completed
            </Text>
            {completedTodos?.length > 0 ? (
              completedTodos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
              ))
            ) : (
              <Box color="red.500">
                <WarningTwoIcon mr={2} />
                No completed tasks
              </Box>
            )}
          </VStack>
        </Stack>
      </Stack>
    </Box>
  );
}

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = {
  getTodos,
  toggleTodo,
  addTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
