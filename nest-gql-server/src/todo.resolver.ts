import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { Todo } from "./todo";

@Resolver()
export class TodoResolver {
  private todos = []

  @Query('todos')
  getAllTodos() {
    return this.todos
  }

  @Mutation('createTodo')
  createTodo(@Args() todo: Todo) {
    this.todos.push(todo)
    return this.todos
  }

  @Mutation('deleteTodo')
  deleteTodo(@Args('id') id: string) {
    this.todos = this.todos.filter(todo => todo.id !== id)
    return this.todos
  }

  @Mutation('changeTodo')
  changeTodo(@Args('id') id: string, @Args('status') status: boolean) {
    this.todos = this.todos.map(todo => {
      if(todo.id === id) return {
        ...todo,
        status
      }
      else return todo
    })
    return this.todos
  }
}