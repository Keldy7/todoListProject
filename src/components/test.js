import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';

const HomeScreen = () => {
  const [todoList, setTodoList] = useState([]);
  const [todoItem, setTodoItem] = useState('');

  const addTodoItem = () => {
    setTodoList([...todoList, { key: todoList.length.toString(), text: todoItem }]);
    setTodoItem('');
  }

  const removeTodoItem = (item) => {
    setTodoList(todoList.filter((todo) => todo.key !== item.key));
  }

  return (
    <View style={{ padding: 40 }}>
      <TextInput
        placeholder="Enter a todo item"
        value={todoItem}
        onChangeText={setTodoItem}
      />
      <Button title="Add" onPress={addTodoItem} />
      <FlatList
        data={todoList}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text>{item.text}</Text>
            <Button title="Remove" onPress={() => removeTodoItem(item)} />
          </View>
        )}
      />
    </View>
  );
};

export default HomeScreen;
