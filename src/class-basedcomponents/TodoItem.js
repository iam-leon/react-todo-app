import React, { Component } from 'react';
import styles from './TodoItem.Module.css'

class TodoItem extends Component {
    state = { 
        editing: false,
     } 

    handleEditing = () => {
        this.setState({
            editing: true,
        })
    }

    handleUpdatedDone = event => {
        if (event.key === "Enter") {
          this.setState({ editing: false })
        }
    }

    componentWillUnmount() {
        console.log("Cleaning up...")
    }

    render() { 
        const completedStyle = {
            fontStyle: "italic",
            color: "#595959",
            opacity: 0.4,
            textDecoration: "line-through",
        }
        let viewMode = {}
        let editMode = {}

        if (this.state.editing) {
            viewMode.display = "none"
        }
        else {
            editMode.display = "none"
        }

        return (
            <li className={styles.item}>
                <div onDoubleClick={this.handleEditing} style={viewMode} >
                    <input
                    type="checkbox"
                    className={styles.checkbox}
                    checked={this.props.todo.completed}
                    onChange={ () => this.props.handleChangeProps(this.props.todo.id)}
                    />
                    <button onClick={ () => this.props.deleteTodoProps(this.props.todo.id)} >Delete</button>
                    <span style={this.props.todo.completed ? completedStyle : null}>
                        {this.props.todo.title}
                    </span>
                </div>
                <input
                    type="text"
                    className={styles.textInput}
                    style={editMode}
                    value={this.props.todo.title}
                    onChange={e => {
                        this.props.setUpdate(e.target.value, this.props.todo.id)
                    }}
                    onKeyDown={this.handleUpdatedDone}
                />
            </li>
        );
    }
}
 
export default TodoItem;