import React, { Component } from 'react'
import Todos from './Todos'
import './css/style.css'
import axios from 'axios'


export class App extends Component {
    
      constructor(props) {
          super(props);
              this.state = {
                  title: '',
                  todos: [
                      {
                          id: 1,
                          title: 'take exam',
                          completed: false
                      },
                      {
                          id: 2,
                          title: 'prepare for exam',
                          completed: false
                      },
                      {
                          id: 3,
                          title: 'revisoion',
                          completed: false
                      },
                      {
                          id: 4,
                          title: 'code practice',
                          completed: true
                      },
                      {
                          id: 5,
                          title: 'download admit card',
                          completed: false
                      }
                  
                  ]
              }  
      }
    componentDidMount() {
        // axios
        //   .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
        //   .then((res) => this.setState({todos:res.data}));
    }

    handleClick=(index)=> {
        this.setState({todos:[...this.state.todos].map(todo => {
                if (todo.id === index) {
                    todo.completed = !todo.completed
                }
            return todo;
            })
        });
        
    }
    handleDelete = (index,e) => {
        // axios.get(`https://jsonplaceholder.typicode.com/todos/${index}`)
        //     .then((res) => {
        //     this.setState({todos:[...this.state.todos.filter(todo=>todo.id!==index)]})
        // })
        // console.log(e)
        this.setState({todos: [...this.state.todos.filter((todo) => todo.id !== index)]});
        
    }
    
    addTodoHandler = (title) => {
        // axios.post('https://jsonplaceholder.typicode.com/todos', {
        //     title,
        //     completed:false
        // })
        //     .then((res) => {
        //     this.setState({todos:[...this.state.todos,res.data]})
        // })
        const newTodo = {
            id: Math.floor(Math.random()*10),
            title,
            completed:false
        }
        this.setState({todos:[...this.state.todos,newTodo]})
  }
    
    render(){
        return (
            <div className="App">
               
                
                <Todos todos={this.state.todos} handle={this.handleClick} handleDelete={this.handleDelete}
                 handleAdd={this.addTodoHandler}   
                />
            </div>
        )
    }
}

export default App
