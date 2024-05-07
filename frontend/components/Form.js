import React from 'react'

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: ''
    }
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({...this.state, todo: e.target.value})
  }
  onSubmit = e => {
    e.preventDefault();
    this.props.addTodo(e, this.state.todo);
    this.setState({...this.state, todo: ''})
  }
  

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input onChange={this.handleChange} type='text' placeholder='Type Todo' name='todo' value={this.state.todo}/>
        <button>Add</button>
      </form>
    )
  }
}
export default Form
