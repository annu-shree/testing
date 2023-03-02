import React from "react";


class Todoitem extends React.Component {

  clickHandler = () => {
    this.props.togglecomplete(this.props.index);
  };

  deletetodo = () => {
    this.props.delete(this.props.index)
  }

  edittodo = () => {
    this.props.edit(this.props.index);
  }


  render() {
    const { todo } = this.props;
    return (
      <div className="listbox">

        <li className={todo.completed ? "completed" : ""}>
          <input type="checkbox" checked={todo.completed} onChange={this.clickHandler}></input> 
          <span onClick={this.clickHandler} > {todo.text}</span>

          <span>
            <button onClick={this.deletetodo}> Delete</button>
          </span>
          <span>
            <button onClick={this.edittodo}> edit</button>
          </span>
        </li>
      </div>
    )

  }
}


export default Todoitem;