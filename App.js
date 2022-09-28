import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Picker } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {Ionicons} from '@expo/vector-icons' // Imagenes prediseñadas
import { TouchableOpacity } from 'react-native-web';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor:'white',
          activeBackgroundColor:'powderblue',
          inactiveTintColor:'gray'
        }}
      >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{title:'Inicio', tabBarIcon:({color, size})=>
            (<Ionicons name='home' color={'gray'} size={20}/>)
      }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{title:'Configuracion', tabBarIcon:({color, size})=>
            (<Ionicons name='settingws' color={'gray'} size={20 }/>)    
      }}
      />
      <Tab.Screen
        name="Contacts"
        component={Contacts}
        options={{title:'Contactos', tabBarIcon:({color, size})=>
            (<Ionicons name='person' color={'gray'} size={20 }/>)    
      }}
      />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function Home(){
  return (
    <View style={styles.container}>
      <Text>Estamos en el Inicio</Text>
    </View>
  );
}
function Settings(){
  return (
    <View style={styles.container}>
      <Text>Estamos en las Configuraciones</Text>
    </View>
  );
}
const Contacts = () =>{
  const [selectedValue, setSelectedValue] = useState("Php");
  const mostrarLenguaje = () =>{
    alert(`Lenguaje seleccionado ${selectedValue}`)
  }
  return (
    <View style={styles.container}>
      <Text>Estamos en contactos</Text>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 30, width: 150}}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="Php" value="php" />
        <Picker.Item label="Ruby" value="Ruby" />
      </Picker>
      <TouchableOpacity
        style={{padding:10, borderRadius:10, backgroundColor:'red', marginTop:10}}
        onPress={mostrarLenguaje}
      >
        <Text style={{color:'white'}}>Chequear Lenguaje seleccionado</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
