import React, {Component} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Clients from "./src/screens/users/Clients";
import Reports from "./src/screens/reports";
import Order from "./src/screens/order";
import Icons from "react-native-vector-icons/AntDesign";
import Mycolors from "./src/colors/mycolors";
import DataState from "./src/context/AppState";

const Tab = createBottomTabNavigator();
class App extends Component { //1:027:00 video 8 
  
  render() {
    return (
      <DataState>
        <NavigationContainer independent={true}>

          <Tab.Navigator
            screenOptions={({route}) => ({
              tabBarIcon: ({focused, color, size}) => {
                let iconName;
                switch (route.name) {
                  case 'Usuarios': {
                    if (focused) {
                      return (
                        <Icons name="team" size={23} color={Mycolors.secondary} />
                      );
                    } else {
                      return (
                        <Icons name="team" size={23} color={Mycolors.three} />
                      );
                    }
                  }
                  case 'Pedidos': {
                    if (focused) {
                      return (
                        <Icons name="form" size={23} color={Mycolors.secondary} />
                      );
                    } else {
                      return (
                        <Icons name="form" size={23} color={Mycolors.three} />
                      );
                    }
                  }
                  case 'Reportes': {
                    if (focused) {
                      return (
                        <Icons name="switcher" size={23} color={Mycolors.secondary} />
                      );
                    } else {
                      return (
                        <Icons name="switcher" size={23} color={Mycolors.three} />
                      );
                    }
                  }

                }
              },
            })}
          >
            <Tab.Screen name="Usuarios" component={Clients} />
            <Tab.Screen name="Pedidos" component={Order} />
            <Tab.Screen name="Reportes" component={Reports} />
          </Tab.Navigator>
        </NavigationContainer>

      </DataState>
    )
  }
}

export default App;