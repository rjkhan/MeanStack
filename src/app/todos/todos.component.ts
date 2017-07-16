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
         text: "hello"
      },
      {
        text: "kamal"
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
  // delete do to
  deleteTodo(todoText)
  {
    for(var i= 0; i< this.todos.length; i++)
    {
      if(this.todos[i].text == todoText)
        {
          this.todos.splice(i,1);
        }
    }
  }

}
