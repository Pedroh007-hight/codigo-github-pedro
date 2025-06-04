import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View ,Image,TextInput,Button,Flatlist} from 'react-native';
import logo from "https://metalop.com/ToDo-List-Pro/images/TODO-List-icon-small.png"

export default function App() {
  const [data,setData] = useState([
    {id: 1, descrição: "Tarefa1", data: "2025-01-01", realizado: true},
    {id: 2, descrição: "Tarefa1", data: "2025-01-01", realizado: false},
    {id: 3, descrição: "Tarefa1", data: "2025-01-01", realizado: true},
    {id: 4, descrição: "Tarefa1", data: "2025-01-01", realizado: false},
    {id: 5, descrição: "Tarefa1", data: "2025-01-01", realizado: true},
  ]);

  const item = (item)=>m {
    return(
      <View>
       <Text>{item.realizado}</Text>
       <view>
        <Text>{item.descrição}</Text>
       </view>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <View Style={styles.viewLogo}>
      <Text style={styles.title}>TODO list</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  logo {
    height:200,
    widht:200,
  },
  viewTask:{
    flexDirection: "row",
  },
  inputTask: {
    flex: 1,
    borderColor: "gray"
    boderWidth: 1,
    paddingLeft: 10,
    marginRight: 10,
  },
  viewLogo:{
    alignItems: "center"
    justifyContent: "center",
  },
  textLogo: {
    justifyContent:"center",
  }
});
