import { Component, OnInit } from '@angular/core';
import {TodoService} from '../todo.service';

@Component({
  moduleId: module.id,
  selector: 'app-todos',
  templateUrl: 'todos.component.html',
  styleUrls: ['todos.component.css']
})
export class TodosComponent implements OnInit {
  todos;
  text;
  appState = 'default';
  oldText ;
  constructor(private _todoService: TodoService) { }

  ngOnInit() {
    this._todoService.loadOrInitlizeTodos();
    this.todos = this._todoService.getTodoList();
  
    console.log('todos on Init Call');
  }

  addTodo()
  {
    var newTodo = {
      text: this.text
    };
    this.todos.push(newTodo);
    this.text = "";
    this._todoService.addNewTodo(newTodo);
    
  }
  // delete do to
  deleteTodo(todoText)
  {
    this.todos = this._todoService.deleteTodoFromLocalStorage(todoText);
  }

  editTodo(todoText)
  {
    this.appState = "edit";
    this.text = todoText;
    this.oldText = todoText;
    console.log(this.appState);
    // console.log(todoText);
  }

  updateTodo(){
    console.log(this.text);
    console.log(this.oldText);

    this.todos = this._todoService.updateTodoInList(this.text, this.oldText);
    this.text = "";
    this.appState = 'default';
  }

}
