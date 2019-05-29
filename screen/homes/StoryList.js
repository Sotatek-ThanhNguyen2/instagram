
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image,
   TouchableHighlight, TouchableNativeFeedback, TouchableWithoutFeedback,
    Alert, FlatList, Button} from 'react-native';

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
            <TouchableWithoutFeedback onPress={() => this.selectStoryItem(item)}>
                <View style={{margin:10,
                    justifyContent:'center',
                    alignItems:'center'}}>
                  <View style={ item.firstItem && styles.storyListCircle}>
                    <Image source={require('../../assets/vn.png')}
                      style={{borderRadius:25, borderColor:'#345',
                      borderWidth:1, width:50, height:50}}>
                      </Image>
                      <Image source={require('../../assets/add.png')}
                        style={item.firstItem == true ? styles.storyListNoAddNew : styles.storyListAddNew}>
                        </Image>
                  </View>
                  <Text style={{fontSize:11}}>{item.content}</Text>
                </View>
            </TouchableWithoutFeedback>
              
           )
          }
          horizontal={true}
          >
          </FlatList>
        </View>
      )
    }
  
    selectStoryItem(item){
      console.log("Selected item :", item)
      Alert.alert("Just select item " + item.content)
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
    },
    smallStoryListCircle:{
      borderRadius:17, borderColor:'#567565', 
      borderWidth:2, width:34, height:34, justifyContent:'center',
       alignItems:'center', margin:10
    },
    storyListAddNew:{
      borderRadius:25, borderColor:'#fff',
    borderWidth:1, width:20, height:20, position:'absolute',
    bottom:0,right:0
  },
  storyListNoAddNew:{
    borderRadius:25, borderColor:'#fff',
  borderWidth:1, width:0, height:0, position:'absolute',
  bottom:0,right:0
  },
  tabBarIcon:{
    width:20,
    height:20
  }
  });
  
  export default StoryList