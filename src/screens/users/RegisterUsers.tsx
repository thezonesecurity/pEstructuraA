import React, {Component} from "react";
import {Text, View, StyleSheet} from "react-native";
import {TextInput, Button, Avatar} from "react-native-paper";
import axios, { AxiosResponse } from "axios";
import TakePicture from "./TakePicture";
import {StackNavigationProp} from "@react-navigation/stack";
interface ItemUsers {
  username?: string,
  email?: string,
  password?: string,
  repassword?: string
}
interface MyState {
 username: string,
 email: string,
 password: string,
 repassword: string
}
interface MyProps {
  navigation: StackNavigationProp<any, any>
}
class RegisterUsers extends Component<MyProps, MyState> {
  constructor(props: any) {
    super(props);
    this.state = {
        username: "",
        email: "",
        password: "",
        repassword: ""
    }
  }
  async CheckAndSetData() {
    console.log(this.state);
    if (this.state.password != this.state.repassword) {
      return;
    }
    var result: any = await axios.post<ItemUsers, AxiosResponse<any> >("http://192.168.1.106:8000/api/users", this.state);
    console.log(result);
    this.props.navigation.push("list"); //en "list" es igual ./CLients-> al name del stack.creen
  }
  onTakePicture(path: string) {
    console.log("funcion register user camera")
    console.log(path);
  }
  render() {
    return (
      <View style={styles.container}>
          <TextInput style={styles.txtstyles} //agregar campo d texto 1:25 video 5
            label="User Name"
            onChangeText={text => {
             // console.log(text)
              this.setState({
                username: text
              });
          }}/>
          <TextInput  style={styles.txtstyles} //agregar campo d texto 1:25 video 5
            label="Email"
            onChangeText={text => {
              this.setState({
                email: text
              });
          }}/>
          <TextInput style={styles.txtstyles} //agregar campo d texto 1:25 video 5
            label="Password"
            onChangeText={text => {
              this.setState({
                password: text
              });
          }}/>
          <TextInput style={styles.txtstyles} //agregar campo d texto 1:25 video 5
            label="Re. Password"
            onChangeText={text => {
              this.setState({
                repassword: text
              });
          }}/>
          <View style={styles.sub}>
            <Button  style={styles.txtstyles} icon="aspect-ratio" mode="contained" onPress={() => {
                this.props.navigation.push("TakePicture", {onTake: (params: string) => {
                    this.onTakePicture(params);
                }});
              }}>
                Foto
            </Button>
            <View style={styles.imagestyle} >
              <Avatar.Image size={110} source={require('../../../assets/img/avatardefault.png')} />
            </View>
          </View>

          <Button  style={styles.txtstyles} icon="briefcase-plus" mode="contained" onPress={() => {
            this.CheckAndSetData();
          }}>
            Create user
          </Button>
      </View>
    )
  }
}
var styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  txtstyles:{
    marginTop: 5,
  },
  imagestyle: {
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: "20%",
  },
  sub:{
    alignItems: "center",
    flexDirection: "row",
    padding: 7
  }
}); 
export default RegisterUsers;