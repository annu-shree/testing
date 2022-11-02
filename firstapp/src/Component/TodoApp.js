
import React, { Component } from "react";
import Addtodo from "./Addtodo";
import Todoitem from "./Todoitem";

class TodoApp extends React.Component {
    state = {
        todos: [
            {
                text: "buy milk",
                completed: true
            },
            {
                text: "buy bread",
                completed: true

            },
            {
                text: "buy fruits",
                completed: false
            }
        ]
    }


    togglecomplete = (index) => {
        const newtodos = this.state.todos.map((todo, i) => {
            if (index === i) {
                return {
                    ...todo,
                    completed: !todo.completed

                };
            }
            return todo;
        });
        this.setState({
            todos: newtodos
        })
    }


    delete = (index) => {
        const newtodos = this.state.todos.filter((todo, i) => {
            if (index === i) {
                return false;
            }
            return true;
        })
        this.setState({
            todos: newtodos
        })
    };


    edit = (index) => {
        const editedvalue = prompt();
        console.log(editedvalue);

        const newtodos = this.state.todos.map((todo, i) => {
            if (index === i) {
                todo.text = editedvalue;
            }
            return todo;
        });

        this.setState({
            todos: newtodos
        })

    };



    addtodotostate = (text) => {
        const newtodos = this.state.todos.concat({
            text
        });

        this.setState({
            todos: newtodos
        })
    }

    render() {
        return <div className="Todo">
            <Addtodo addtodotostate={this.addtodotostate}></Addtodo>
            {this.state.todos.map((todo, index) => {
                return <Todoitem
                    togglecomplete={this.togglecomplete}
                    delete={this.delete}
                    edit={this.edit}
                    todo={todo}
                    key={index}
                    index={index}>
                </Todoitem>
            })}


        </div>
    }
}
export default TodoApp;