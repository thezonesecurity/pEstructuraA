import React, {Component} from "react";
import {getFocusedRouteNameFromRoute, NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Clients from "./src/screens/clients";
import Reports from "./src/screens/reports";
import Order from "./src/screens/order";
import Icons from "react-native-vector-icons/AntDesign";
import Mycolors from "./src/colors/mycolors";
const Tab = createBottomTabNavigator();
class App extends Component {
  render() {
    return (
      <NavigationContainer>


        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;
              switch (route.name) {
                case 'Clientes': {
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
          <Tab.Screen name="Clientes" component={Clients} />
          <Tab.Screen name="Pedidos" component={Order} />
          <Tab.Screen name="Reportes" component={Reports} />
        </Tab.Navigator>
      </NavigationContainer>
    )
  }
}
export default App;