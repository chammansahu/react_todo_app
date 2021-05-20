import React, { Component } from 'react'

export class AddTodo extends Component {
  state = {
    title: "",
  };
  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
      console.log("sbmitted");
      this.props.addTodo(this.state.title)
      this.setState({title:''})
  };
  render() {
    return (
    
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            className="input"
            name="title"
            placeholder="Enter your todo"
            autoComplete="off"
            value={this.state.title}
            onChange={this.changeHandler}
          />
        </form>
      
    );
  }
}

export default AddTodo
