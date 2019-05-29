

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image,
   TouchableHighlight, TouchableNativeFeedback, TouchableWithoutFeedback,
    Alert, FlatList, Button} from 'react-native';

class HeaderHome extends Component{

    onPressCamera(){
      console.log("Just press camera")
      Alert.alert("Just press camera")
    }
  
    onPressLiveStream(){
      Alert.alert("Just press livestream")
    }
  
    onPressSending(){
      Alert.alert("Just press sending")
    }
  
    render(){
      return(

          <View style={styles.header}>
            <View style={styles.leftHeader}>
              <TouchableNativeFeedback onPress={this.onPressCamera} underlayColor='white'>
                <View>
                  <Image source={require('../../assets/camera.png')}
                    style={styles.headerCamera} />
                </View>
               
              </TouchableNativeFeedback>
  
              <Text style={{fontSize:24, marginLeft:20}}>
              Insta
              </Text>
            </View>
  
            <View style={styles.rightHeader}>
              <TouchableNativeFeedback onPress={this.onPressLiveStream}>
                <View>
                  <Image source={require('../../assets/video.png')}
                  style={styles.rightHeaderIcon} />
                </View>
              </TouchableNativeFeedback>
  
              <TouchableNativeFeedback onPress={this.onPressSending}>
                <View>
                  <Image source={require('../../assets/send.png')}
                  style={styles.rightHeaderIcon} />
                </View>
              </TouchableNativeFeedback>
            </View>
              
          </View>
      )
    }
  }
  
const styles = StyleSheet.create({
  header:{
    backgroundColor:'#fff',
    height:60,
    flexDirection:'row'
  },
  leftHeader:{
    flex:1,
    flexDirection:'row',
    alignItems:'center'
  },
  headerCamera:{
    width: 35,
    height: 35,
    marginLeft: 20
  },
  rightHeader:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-end'
  },
  rightHeaderIcon:{
    marginRight:20,
    width: 35,
    height: 35
  }
});

  export default HeaderHome