import React, {PureComponent} from "react";
import {Text, View, AppRegistry, TouchableOpacity, StyleSheet} from "react-native"
import {StackNavigationProp} from "@react-navigation/stack";
import {Button} from "react-native-paper";
import { RNCamera } from 'react-native-camera';
import Mycolors from "../../colors/mycolors";
import AppContext from "../../context/AppContext";

interface IParams {
    onTake: Function
}
interface IRoute { 
    params: IParams
}
//1:19: video 7
interface MyProps {
    navigation: StackNavigationProp<any, any>
    route: IRoute
}
class TakePicture extends PureComponent<MyProps, any> {
  camera: any
  static contextType = AppContext;
  constructor(props: MyProps) {
    super(props);

  }
  async takePicture() {
    const {changeUri} = this.context;
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      console.log("de la foto -> "+ data.uri);
      changeUri(data.uri);
      this.props.navigation.navigate("RegisterUsers");
      /*console.log(data.uri);
      this.props.route.params.onTake(data.uri);
      */
      
    }
  }
  render() {
      console.log(this.props)
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          onGoogleVisionBarcodesDetected={({ barcodes }) => {
            console.log(barcodes);
          }}
        />
        <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
          <Button icon="camera-enhance" mode="contained" onPress={() => {
            this.takePicture();
          }} style={styles.capture}> Tomar Foto
          </Button>

          
        </View>
      </View>
      /*
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
      */
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: Mycolors.secondary,
    borderRadius: 5,
    padding: 5,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});

export default TakePicture;