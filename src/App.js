import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  Alert,
} from 'react-native';
import Header from './components/Header';
import NoteInsertCard from './components/NoteInsertCard';
import ToDoCard from './components/ToDoCard';

const App = () => {
  const [toDoList, setToDoList] = useState([
    {id: 1, content: 'bu işi bitir', isOpen: true},
    {id: 2, content: 'başka şansın yok', isOpen: false},
  ]);

  // const changeIsDone = id => {
  //   const newTodoList = toDoList.map(todo => {
  //     if (todo.id === id) {
  //       todo.isDone = !todo.isDone;
  //     }
  //     return todo;
  //   });
  //   setToDoList(newTodoList);
  // };

  const count = toDoList.filter(item => item.isOpen).length;

  const renderToDoItem = item => (
    <ToDoCard
      noteItem={item.item}
      deleteTodo={deleteTodo}
      changeIsDone={changeIsDone}
    />
  );

  // useEffect(() => {
  //   {
  //     toDoList.length > 0 && Alert.alert('Note Eklendi');
  //   }
  // }, [toDoList]);

  const deleteTodo = id => {
    const newTodoList = toDoList.filter(todo => todo.id !== id);
    setToDoList(newTodoList);
  };

  const changeIsDone = id => {
    const newTodoList = toDoList.map(todo => {
      if (todo.id === id) {
        todo.isOpen = !todo.isOpen;
      }
      return todo;
    });
    setToDoList(newTodoList);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header counter={count} />
      <FlatList
        keyExtractor={item => item.id}
        data={toDoList}
        renderItem={renderToDoItem}
      />
      <NoteInsertCard toDoList={toDoList} setToDoList={setToDoList} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101f26',
    padding: 15,
  },
});

export default App;
