import React, { useEffect, useState } from 'react';
import { useQuery, useMutation } from "@apollo/client";
import Box from "@material-ui/core/Box"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core";

import Todo from "./components/Todo";
import { GET_TODOS, CREATE_TODO, DELETE_TODO, CHANGE_TODO } from './queries';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 400,
    margin: '0 auto',
  },
}));

function App() {
  const classes = useStyles()

  const [todos, setTodos] = useState([]);
  const [todoName, setTodoName] = useState("");
  const { data } = useQuery(GET_TODOS)
  const [createTodo] = useMutation(CREATE_TODO)
  const [deleteTodo] = useMutation(DELETE_TODO)
  const [changeTodo] = useMutation(CHANGE_TODO)

  useEffect(() => {
    if(data) setTodos(data.todos);
  }, [data])

  const createNewTodo = async () => {
    const { data } = await createTodo({ variables: {
        title: todoName,
        status: false,
        id: Date.now().toString()
      }})

    setTodos(data.createTodo);
    setTodoName("");
  }

  const deleteTodoHandler = async (id) => {
    const { data } = await deleteTodo({ variables: { id }})
    setTodos(data.deleteTodo);
  }

  const changeTodoStatusHandler = async (id, status) => {
    const { data } = await changeTodo({ variables: { status ,id }})
    setTodos(data.changeTodo);
  }

  return (
    <Box className={classes.root}>
      <Box display="flex" justifyContent="space-between">
        <TextField variant="outlined" value={todoName} onChange={e => setTodoName(e.target.value)}/>
        <Button onClick={createNewTodo} color="primary" variant="contained">Create Todo</Button>
      </Box>
      {todos && todos.length ? todos.map(todo =>
        <Todo
          key={todo.id}
          todo={todo}
          changeStatus={changeTodoStatusHandler}
          deleteTodo={deleteTodoHandler}
        />)
          :
        <div>no todos</div>}
    </Box>
  );
}

export default App;
