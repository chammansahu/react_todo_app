import React, { Component } from "react";
import PropTypes from 'prop-types'
export class TodoItem extends Component {
  render() {
     //console.log(this.props);
    return (
      <div className="todoItem">
        <li
          className={`li ${this.props.todo.completed ? "completed" : ""}`}
          onClick={(id) => this.props.click(this.props.todo.id)}
        >
          {this.props.todo.title}
        </li>
        
          <button className='btn delete'
            onClick={(id) => this.props.delete(this.props.todo.id)}
            
          >
            x
          </button>
        
      </div>
    );
  }
}
//proptypes 
TodoItem.propTypes = {
  todo:PropTypes.object.isRequired
}
export default TodoItem;
