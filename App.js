/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image,
   TouchableHighlight, TouchableNativeFeedback, Alert, FlatList} from 'react-native';

type Props = {};

class HeaderHome extends Component{

  onPressCamera(){
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
                <Image source={require('./assets/camera.png')}
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
                <Image source={require('./assets/video.png')}
                style={styles.rightHeaderIcon} />
              </View>
            </TouchableNativeFeedback>

            <TouchableNativeFeedback onPress={this.onPressSending}>
              <View>
                <Image source={require('./assets/send.png')}
                style={styles.rightHeaderIcon} />
              </View>
            </TouchableNativeFeedback>
          </View>
            
        </View>
    )
  }
}

class StoryList extends Component{

  render(){
    return(
      <View style={{backgroundColor:'#fff',
       height:80 }}>
        <FlatList data={[{firstItem:false, content:"Park hang seo"}
        , {firstItem:true, content:"Park hang seo"}
        , {firstItem:true, content:"Park hang seo"}
        , {firstItem:true, content:"Park hang seo"}
        , {firstItem:true, content:"Park hang seo"}
        , {firstItem:true, content:"Park hang seo"}
        , {firstItem:true, content:"Park hang seo"}]} 
        renderItem = {({item})=> ( 
              <View style={{margin:10,
              justifyContent:'center',
               alignItems:'center'}}>
               <View style={ item.firstItem && styles.storyListCircle}>
                 <Image source={require('./assets/camera.png')}
                  style={{borderRadius:25, borderColor:'#345', borderWidth:1, width:50, height:50}}>
                  </Image>
                  <Image source={require('./assets/camera.png')}
                    style={{borderRadius:25, borderColor:'#345', borderWidth:1, width:20, height:20}}>
                    </Image>
               </View>
               <Text style={{fontSize:11}}>{item.content}</Text>
             </View>
         )
        }
        horizontal={true}
        >
        </FlatList>
      </View>
    )
  }


}


export default class App extends Component<Props> {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <View style={{flex: 1, alignItems:'stretch'}}>
        <HeaderHome></HeaderHome>
        <View style={{backgroundColor:'#000', height: 1, opacity: 0.5 }}></View>
        <StoryList></StoryList>
        <View style={{backgroundColor:'#000', height: 0.5, opacity: 0.2 }}></View>
      </View>
    );
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
  },
  storyListCircle:{
    borderRadius:30, borderColor:'#567565', 
    borderWidth:3, width:60, height:60, justifyContent:'center', alignItems:'center'
  }
});
