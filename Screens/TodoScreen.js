import { FlatList, StyleSheet, Text,TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react';
import { IconButton } from 'react-native-paper';

const dummyData=[
  {
    id:"01",
    title:"Wash Car",
  },
  {
    id:"02",
    title:"Read a book",
  },
];

const TodoScreen = () => {

  const renderTodos=({item,index})=>{
    return(
      <View style={styles.render_todo}>
         <Text style={styles.text2} >{item.title}</Text>
         <IconButton icon="pencil" iconColor='#fff'/>
         <IconButton icon="trash-can" iconColor='#fff'/>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.text_input}
      placeholder="Add a Task"
      ></TextInput>
      <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>ADD</Text>
      </TouchableOpacity>
      <FlatList data={dummyData} renderItem={renderTodos}/>
    </View>
  )
}

export default TodoScreen

const styles = StyleSheet.create({
  container:{
    marginTop:30,
    marginHorizontal:16,
  },
  text_input:{
    borderWidth:2,
    borderColor:"#1e90ff",
    borderRadius:6,
    paddingVertical:6,
    paddingHorizontal:16,
    
  },
  button:{
    marginTop:15,
    backgroundColor:"#000",
    borderRadius:6,
    paddingVertical:12,
    marginVertical:34,
    alignItems:"center",
  },
  text:{
    color:"#fff",
    fontWeight:"bold",
    fontSize:20,
    
  },
  text2:{
    color:"#fff",
    fontWeight:"bold",
    fontSize:20,
    flex:1
  },
  render_todo:{
    backgroundColor:"#1e90ff",
    borderRadius:6,
    paddingHorizontal:6,
    paddingVertical:12,
    marginBottom:10,
    flexDirection:"row",
    alignItems:"center",
  }
})