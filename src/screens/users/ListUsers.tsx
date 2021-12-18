import React, {Component} from "react";
import {Text, View, StyleSheet} from "react-native"
import axios from "axios";
import {List, Avatar, FAB, Searchbar} from "react-native-paper";
import { FlatList } from "react-native-gesture-handler";
import AppContext from "../../context/AppContext";

interface ItemUsers {
  _id: string,
  username: string,
  email: string,
  registerdate: Date,
  roles: Array<any>,
  pathavatar?: string,
  uriavatar?: string
}
interface ServerResponse {
  serverResponse: Array<ItemUsers>
}
interface MyState {
  dataUsers: Array<ItemUsers>
}
interface ItemData {
  item: ItemUsers
}

class ListUsers extends Component<any, MyState> {
  static contextType = AppContext;
  constructor(props: any) {
    super(props);
    this.state = {
      dataUsers: []
    }
  }
  async componentDidMount() {
    console.log(this.context);
    var url = "https://192.168.1.106:8000/api/users";
    var result: Array<ItemUsers> = await axios.get<ServerResponse>(url).then((item) => {
      return item.data.serverResponse
    });
    console.log(result);
    this.setState({
      dataUsers: result
    });
  }
  listItem(params: ItemData) {
    var item: ItemUsers = params.item;
    if (item.uriavatar == null) {
      return <List.Item
         title={item.username}
         description={item.email}
         left={props => <List.Icon {...props} icon="emoticon-cool" />}
      />
    }else {
      var uriImage = "https://192.168.1.106:8000" + item.uriavatar;
      return <List.Item
         title={item.username}
         description={item.email}
         left={props => <Avatar.Image size={48} source={{uri: uriImage}} /> }
      />
    }
  }
  render() {
    var {searchbarVisible} = this.context;
    return (
      <View style={styles.container}>
          <View>
            {
              searchbarVisible && //1:20:00 video 8 para hacer apacer y desaparecer el search
              <Searchbar
              placeholder="Search"
              onChangeText={() => {

              }}
              value= ""
              />
            }
          </View>
          <Text>
              screen for clientes
          </Text>
          <View>
            <FlatList //min 30-36 de video 5 
              data={this.state.dataUsers}
              renderItem={({item}) => (
                <this.listItem  item= {item} />
              )}
              keyExtractor={(item) => item._id}
            />
          </View>
          <FAB
            style={styles.fab}
            small={false}
            icon="plus"
            onPress={() => {
                this.props.navigation.push("RegisterUsers");// navigate o push similares //en "RegisterUsers" es igual ./CLients-> al name del stack.creen
            }}
          />
      </View>
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
export default ListUsers;