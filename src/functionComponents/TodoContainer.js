import React, { useState, useEffect, Fragment } from "react"
import Header from "./Header"
import InputTodo from "./InputTodo"
import TodosList from "./TodosList"
import { v4 as uuidv4 } from "uuid"

const TodoContainer = () => {
  const [todos, setTodos] = useState(getInitialTodos())

  const handleChange = id => {
    setTodos(prevState =>
      prevState.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo
      })
    )
  }

  const delTodo = id => {
    setTodos([
      ...todos.filter(todo => {
        return todo.id !== id
      }),
    ])
  }

  const addTodoItem = title => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    }
    setTodos([...todos, newTodo])
  }

  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.title = updatedTitle
        }
        return todo
      })
    )
  }

  // useEffect(() => {
  //   console.log("test run")

  //   const temp = localStorage.getItem("todos")
  //   const loadedTodos = JSON.parse(temp)

  //   if (loadedTodos) {
  //     setTodos(loadedTodos)
  //   }
  // }, [setTodos])

  function getInitialTodos() {
    // getting stored items
    const temp = localStorage.getItem("todos")
    const savedTodos = JSON.parse(temp)
    return savedTodos || []
  }

  useEffect(() => {
    // storing todos items
    const temp = JSON.stringify(todos)
    localStorage.setItem("todos", temp)
  }, [todos])

  return (
    <div className="inner" >
      <div className="container">
          <Header />
          <InputTodo addTodoProps={addTodoItem} />
          <TodosList
            todos={todos}
            handleChangeProps={handleChange}
            deleteTodoProps={delTodo}
            setUpdate={setUpdate}
          />
      </div>
    </div>
  )
}

export default TodoContainer

// class TodoContainer extends Component {
//     state = { 
//         todos:[],
//     }
    
//     handleChange = (id) => {
//         this.setState(prevState => ({
//             todos: prevState.todos.map(todo => {
//               if (todo.id === id) {
//                 return {
//                   ...todo,
//                   completed: !todo.completed,
//                 }
//               }
//               return todo
//             }),
//         }))
//     };

//     deleteTodo = (id) => {
//         this.setState({
//           todos: [
//             ...this.state.todos.filter(todo => {
//               return todo.id !== id;
//             })
//           ]
//         });
//     };

//     addTodoItem = title => {
//         const newTodo = {
//           id: uuidv4(),
//           title: title,
//           completed: false
//         };
//         this.setState({
//           todos: [...this.state.todos, newTodo]
//         });
//     };

//     setUpdate = (updatedTitle, id) => {
//       this.setState({
//         todos: this.state.todos.map(todo => {
//           if (todo.id === id) {
//             todo.title = updatedTitle
//           }
//           return todo
//         }),
//       })
//     }

//     componentDidUpdate(prevProps, prevState) {
//       if(prevState.todos !== this.state.todos) {
//         const temp = JSON.stringify(this.state.todos)
//         localStorage.setItem("todos", temp)
//       }
//     }

//     componentDidMount() {
//       const temp = localStorage.getItem("todos")
//       const loadedTodos = JSON.parse(temp)
//       if (loadedTodos) {
//         this.setState({
//           todos: loadedTodos
//         })
//       }
//     }
    
//     render() { 
//         return (
//             <div className='container'>
//                 <div className='inner'>
//                     <Header />
//                     <InputTodo
//                         addTodoProps={this.addTodoItem}
//                     />
//                     <TodosList 
//                         todos={this.state.todos} 
//                         handleChangeProps={this.handleChange}
//                         deleteTodoProps={this.deleteTodo}
//                         setUpdateProps={this.setUpdate}
//                     />
//                 </div>
//             </div>
//         );
//     }
// }
 
// export default TodoContainer;