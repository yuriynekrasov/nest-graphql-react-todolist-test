import React from "react";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: '100%',
    display: "flex",
    alignItems: "center",
    paddingLeft: 10,
  },
}));

const Todo = ({ todo, deleteTodo, changeStatus }) => {
  const classes = useStyles()

  return (
    <Box display="flex" justifyContent="space-between" marginTop={2}>
      <Paper className={classes.paper}>
        {todo.title}
      </Paper>
      <Box display="flex">
        <Checkbox checked={todo.status} onClick={() => changeStatus(todo.id, !todo.status)}/>
        <Button variant="contained" color="secondary" onClick={e => deleteTodo(todo.id)}>Delete</Button>
      </Box>
    </Box>
  )
}

export default Todo