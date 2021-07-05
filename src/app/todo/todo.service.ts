import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './todo.model';
import { HttpClient, HttpResponse } from '@angular/common/http';

export type EntityArrayResponseType = HttpResponse<Todo[]>;

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private httpClient: HttpClient){}

  query(): Observable<EntityArrayResponseType>{
    return this.httpClient.get<Todo[]>('http://localhost:8090/api/todos', {observe: 'response'});
  }
}
