import React, { Component } from 'react'

class CreateTodo extends Component {
  render() {
    return(
      <div>
        <form>
          <p>
            <label>add todo</label>
            <input type="text" />
          </p>
          <input type="text" />
        </form>
      </div>
    )
  }
}

export default CreateTodo;
