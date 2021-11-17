import {makeAutoObservable} from 'mobx'

export default class TodoStore {
    todos = []
    constructor() { 
        makeAutoObservable(this)
    }

    addTodos(todos) {
        this.todos = todos.slice()
    }

    removeTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id)
    }
    
    todoIsDone(id) {
        this.todos = this.todos.map(todo => todo.id === id ? {...todo, is_done:!todo.is_done}: todo)
    }

    todoIsFavourite(id) {
        this.todos = this.todos.map(todo => todo.id === id ? {...todo, is_favourite:!todo.is_favourite}: todo)
    }

    todoSort(sort){
        console.log('sort', sort)
        if (sort.includes('done')){
            this.todos = this.todos.filter(todo => todo.is_done === true)
        }
        if (sort.includes('favourite')){
            this.todos = this.todos.filter(todo => todo.is_favourite === true)
        }
        if (sort.includes('not done')){
            this.todos = this.todos.filter(todo => todo.is_done === false)
        }

    }
    
}