import React, {Component} from "react";
import {StyleSheet, Platform} from "react-native"
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import ListUsers from "./ListUsers";
import DetailUsers from "./DetailUsers";
import RegisterUsers from "./RegisterUsers";
import {Appbar} from "react-native-paper";
import TakePicture from "./TakePicture"

var Stack = createStackNavigator();
const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';
class Clients extends Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  
  render() {
    return (
      <NavigationContainer independent={true}>
        <Stack.Navigator>
          <Stack.Screen name="list" component={ListUsers} options={() => ({// para listar usuarios
            header: () => <Appbar.Header > 
            <Appbar.Content title="Gestor de usuarios" subtitle={'clientes / roles'} />
            <Appbar.Action icon="magnify" onPress={() => {}} />
            <Appbar.Action icon={MORE_ICON} onPress={() => {}} />
          </Appbar.Header>
          }
          )} />
          <Stack.Screen name="RegisterUsers" component={RegisterUsers} options={() => ({// para registrar usuarios
            header: () => <Appbar.Header > 
              <Appbar.BackAction onPress={() => {
                // this.props.navigation.pop();
              }} />
              <Appbar.Content title="Registro de usuarios" subtitle={'registro nuevo'} />
          </Appbar.Header>
          }
          )} 
          />
          <Stack.Screen name="TakePicture" component={TakePicture} 
            options={() => ({
              header: () => <Appbar.Header > 
                <Appbar.BackAction onPress={() => {
                  // this.props.navigation.pop();
                }} />
                <Appbar.Content title="TakePicture" subtitle={'foto nueva'} />
            </Appbar.Header>
            }
            )}
          />
          <Stack.Screen name="DetailUsers" component={DetailUsers} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
  
})
//192.168.1.106
export default Clients;
