import { Controller, Get, Param, Put, Post, Body, Delete } from '@nestjs/common';
import TodosService from './todos.service';


@Controller('todos')
export class TodosController {
  constructor(private todosService: TodosService) {
  }

  @Get()
  getTodos() {
    return this.todosService.getAllTodos()
  }

  @Put(':id')
  changeTodo(@Param('id') id: string, @Body() body) {
    this.todosService.changeTodo(parseInt(id), body.status)
    return this.todosService.getAllTodos()
  }

  @Post()
  createTodo(@Body() body: any) {
    this.todosService.createTodo(body)
    return this.todosService.getAllTodos()
  }

  @Delete(':id')
  deleteTodo(@Param('id') id: string) {
    this.todosService.deleteTodo(parseInt(id))
    return this.todosService.getAllTodos()
  }
}