import React, { Component } from 'react'
import TodoItem from './TodoItem'
import PropTypes from "prop-types";
import AddTodo from "./AddTodo";

export class Todos extends Component {
   
   
    render() {
         //console.log(this.props);
        return (
          <div>
            <h1>Todos</h1>
              
            <ul className="todos">
              <AddTodo addTodo={this.props.handleAdd} />
                {this.props.todos.map((todo) => {
                    return (
                      <TodoItem
                        todo={todo}
                        click={this.props.handle}
                        delete={this.props.handleDelete}
                      />
                    );
                })}
              </ul>
            
            <small>
              Left click to toggle completed. <br /> Right click to delete todo
            </small>
          </div>
        );
     
}
    }
    
Todos.propTypes = {
  todos:PropTypes.array.isRequired
}
export default Todos
