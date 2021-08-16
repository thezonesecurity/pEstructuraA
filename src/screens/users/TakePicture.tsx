import React, {Component} from "react";
import {Text, View} from "react-native"
import {StackNavigationProp} from "@react-navigation/stack";
import {Button} from "react-native-paper";

interface IParams {
    onTake: Function
}
interface IRoute {
    params: IParams
}
//0:36 video 7
interface MyProps {
    naigation: StackNavigationProp<any, any>
    route: IRoute
}
class TakePicture extends Component<MyProps, any> {
  render() {
      console.log(this.props)
    return (
      <View>
          <Text>
              screen for camera
          </Text>
          <Button  icon="aspect-ratio" mode="contained" onPress={() => {
            this.props.route.params.onTake("parametros enviados desde TakePictur");
            
          }}>
            Capturar Foto
          </Button>
      </View>
    )
  }
}
export default TakePicture;