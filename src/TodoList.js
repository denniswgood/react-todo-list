import React, { Component} from "react";

class TodoList extends Component {
  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input placeholder="enter task"></input>
            <button type="submit">add</button>
          </form>
        </div>
      </div>
    );
  }
}

export default TodoList;