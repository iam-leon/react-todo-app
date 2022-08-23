import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodosList extends Component {
    state = {  } 
    render() { 
        return (
            <ul>
                {this.props.todos.map(todo=>(
                <TodoItem 
                    key={todo.id} 
                    todo={todo} 
                    handleChangeProps={this.props.handleChangeProps}
                    deleteTodoProps={this.props.deleteTodoProps}
                    setUpdate={this.props.setUpdateProps}
                />
            ))}
            </ul>
        );
    }
}
 
export default TodosList;