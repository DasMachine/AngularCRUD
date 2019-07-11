import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  title = 'this comes from the component';
  todos = [
    {
      title: 'Buy milk',
      priority: 1,
      editing: false,
      due: Date.now()
    },
    {
      title: 'Buy dog food',
      priority: 1,
      editing: false,
      due: Date.now()
    }
  ]
  favorites = []

  unfavorite = todo => {
    const removed = this.deleteTodo(this.favorites, todo)
    console.log(removed)
    this.todos.push(removed[0])
  }

  favorite = todo => {
    const removed = this.deleteTodo(this.todos, todo)
    console.log(removed)
    this.favorites.push(removed[0])
  }

  editing = (todo, editing) => {
    todo.editing = editing
  }

  addTodo = todo => {
    console.log(todo)
    todo.editing = false
    todo.due = Date.now()
    todo.title += ' ' + (this.todos.length + 1)
    this.todos.push(todo)
  }

  deleteTodo(todos, todo) {
    const index = todos.indexOf(todo)
    return todos.splice(index, 1)
  }

  updatePriority(todo: any | { title: string; priority: number }, number: number) {
    todo.priority += number
    this.todos.sort((a, b) => a.priority - b.priority)
  }
}
