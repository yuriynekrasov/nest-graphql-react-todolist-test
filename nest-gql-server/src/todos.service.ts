import { Injectable } from '@nestjs/common';

@Injectable()
export default class TodosService {
  private todos = []

  getAllTodos() {
    return this.todos
  }

  createTodo(todo) {
    this.todos.push(todo)
  }

  deleteTodo(id) {
    this.todos = this.todos.filter(todo => todo.id !== id)
  }

  changeTodo(id, status) {
    this.todos = this.todos.map(todo => {
      if(todo.id === id) return {
          ...todo,
          status
        }
      else return todo
    })
  }
}