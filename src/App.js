//import logo from './logo.svg';

import React from "react";
import {TodoCounter} from "./components/TodoCounter";
import {TodoSearch} from "./components/TodoSearch";
import {TodoList} from "./components/TodoList";
import {TodoItem} from "./components/TodoItem";
import {CreateTodoButton} from "./components/CreateTodoButton";

//import './App.css';
const defaultTodos = [
  {text: "cortar cebolla", completed: true},
  {text: "tomar el curso de intro de Rect", completed: false},
  {text: "LLorar con la llorona", completed: false}
];

function App() {
  
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if(!searchValue.length >= 1){
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => { return todo.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())});
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);

    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;

    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);

    const newTodos = [...todos];
    newTodos.splice(todoIndex,1);

    setTodos(newTodos);
  };


  return (
   <React.Fragment>

    <TodoCounter
      total={totalTodos}
      completed ={completedTodos}
    />

   <TodoSearch 
    searchValue={searchValue}
    setSearchValue= {setSearchValue}
   />

    <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem 
          key={todo.text} 
          text={todo.text} 
          completed = {todo.completed} 
          onComplete = {() => completeTodo(todo.text)}
          onDelete = {() => deleteTodo(todo.text)}
          />
        ))}
    </TodoList>

    <CreateTodoButton />
    
   </React.Fragment>
  );
}

export default App;
