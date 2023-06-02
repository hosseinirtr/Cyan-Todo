import React, { useEffect, useState } from "react";
import {
  Stack,
  Text,
  Checkbox,
  Input,
  Button,
  Card,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";
import { connect, shallowEqual, useSelector } from "react-redux";
import { addComments, getComments } from "../redux/actions/commentActions";

function TodoItem({ todo, toggleTodo, addComments }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.title);
  const [commentText, setCommentText] = useState("");
  const [commentForTodo, setCommentForTodo] = useState([]);

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

  const handleCommentInputChange = (event) => {
    setCommentText(event.target.value);
  };

  const handleCommentInputKeyDown = (event) => {
    if (event.key === "Enter") {
      const comment = {
        todoId: todo.id,
        body: commentText,
      };
      addComments(comment);
      setCommentText("");
    }
  };

  const allCommetns = useSelector(
    (data) => data.comment.comments,
    shallowEqual
  );

  useEffect(() => {
    const commentId =
      allCommetns &&
      allCommetns.filter((comment) => comment.todoId === todo.id);

    setCommentForTodo(commentId);
  }, [allCommetns, todo.id]);

  console.log("commentId", commentForTodo);

  return (
    <Card
      minW={"12"}
      minWidth={"md"}
      key={todo.id}
      p={4}
      mb={4}
      backgroundColor={"#e9ffff"}
    >
      <Stack direction="row" align="center">
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
      {}
      <Accordion mt={4}>
        <AccordionItem>
          <Text color={"#0bdbb6"}>
            <AccordionButton>Comments</AccordionButton>
          </Text>
          <AccordionPanel>
            {commentForTodo?.map((comment) => (
              <Text key={comment.id} mb={2}>
                {comment.body}
              </Text>
            ))}

            {!todo.completed && (
              <Input
                value={commentText}
                onChange={handleCommentInputChange}
                onKeyDown={handleCommentInputKeyDown}
                placeholder="Add a comment..."
                mt={2}
                background={"#fff"}
              />
            )}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Card>
  );
}
const mapStateToProps = (state) => ({
  comments: state.comments,
});

const mapDispatchToProps = {
  getComments,
  addComments,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);
