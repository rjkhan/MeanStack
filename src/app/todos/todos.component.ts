import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-todos',
  templateUrl: 'todos.component.html',
  styleUrls: ['todos.component.css']
})
export class TodosComponent implements OnInit {
  todos;
  text;
  constructor() { }

  ngOnInit() {
    this.todos = [
      {
         text: "hello",
         age: "20"
      },
      {
        text: "kamal",
        age: "20"
      }
    ];
    console.log('todos on Init Call');
  }

  addTodo()
  {
    this.todos.push({
      text: this.text
    });
    
  }

}
