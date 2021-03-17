import React, {useState} from 'react';
import './App.css';
import ToDo from './interfaces/ToDo';
import Input from "./components/Input/Input";
import List from "./components/List/List";
import Heading from "./components/Heading/Heading";

function App() {
  const [list, setList] = useState<ToDo[]>([]);

  const addToList = (task: string) => {
    if (task.length > 0) {
      const additionalToDo: ToDo = {
        text: task,
        isCompleted: false
      };
      setList([additionalToDo, ...list]);
    } else {
      alert(`Blank entries aren't allowed`)
    }
  };

  const deleteFromList = (index: number) => {
    const listWithDeletion = list.filter((toDo: ToDo, i: number) => i !== index);
    setList(listWithDeletion);
  };

  const handleComplete = (index: number) => {
    const listWithCompletion: ToDo[] = list.map((toDo: ToDo, i: number) => {
      if (i === index) {
        toDo.isCompleted = !toDo.isCompleted;
      }
      return toDo;
    });
    setList(listWithCompletion);
  };

  const countRemainingTodos = () => {
    return list.reduce((count: number, toDo: ToDo) => {
      if (!toDo.isCompleted) {
        count++;
      }
      return count;
    }, 0);
  };

  return (
    <div className="App">
      <Heading countRemainingTodos={countRemainingTodos} />
      <Input addToList={addToList} />
      <List
          list={list}
          deleteFromList={deleteFromList}
          handleComplete={handleComplete}
      />
    </div>
  );
}

export default App;
