import { Component } from '@angular/core';
interface Todo{
  text:string;
  completed:boolean
}
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  todos:Todo[]=[];
  newTodo:string="";

  addTodo(){
    if(this.newTodo.trim() !== ""){
      const todo:Todo = {
        text:this.newTodo,
        completed:false
      };
      this.todos.push(todo);
      this.newTodo="";
    }
  }

  deleteTodo(todo:Todo){
    const index = this.todos.indexOf(todo);
    if(index !== -1){
      this.todos.splice(index,1)
    }
  }
}
