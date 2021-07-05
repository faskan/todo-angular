import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Todo } from './todo.model';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todoList: Todo[];

  constructor(protected todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.query().subscribe((response: HttpResponse<Todo[]>) => {
      this.todoList = response.body;
    });
  }

}
