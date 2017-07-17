import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {

  constructor() {
    console.log("todo Sevirce Initilized");
   }

  getTodoList(){
    var todoList = JSON.parse(localStorage.getItem('todoList'));
    return todoList;
  }

  // load or initilize todos
  loadOrInitlizeTodos()
  {
    var todoList = localStorage.getItem('todoList');
    if(todoList == null || todoList == undefined)
      {
        var todos = [
          {
            text: "Interview At pikesSoft"
          },
          {
            text: "Lunch With girl Friend"
          },
          {
            text: "meeting with family"
          }
        ];

        localStorage.setItem('todoList', JSON.stringify(todos));
      }
  }
  addNewTodo(newTodo){
    var todoList = JSON.parse(localStorage.getItem('todoList'));
    todoList.push(newTodo);
    // again set Todos
    localStorage.setItem('todoList', JSON.stringify(todoList));
    
  }

  deleteTodoFromLocalStorage(todoText)
  {
    var todos = JSON.parse(localStorage.getItem('todoList'));
    for(var i= 0; i< todos.length; i++)
    {
      if(todos[i].text == todoText)
        {
          todos.splice(i,1);
        }
    }
    localStorage.setItem('todoList', JSON.stringify(todos));
    return todos;
  }
  updateTodoInList(newTodo, oldTodo)
  {
    var todos = JSON.parse(localStorage.getItem('todoList'));

     for(var i= 0; i< todos.length; i++)
    {
      if(todos[i].text == oldTodo)
        {
          todos[i].text = newTodo
        }
    }
    localStorage.setItem('todoList', JSON.stringify(todos));
    return todos;
  }
}
