/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image,
   TouchableHighlight, TouchableNativeFeedback, TouchableWithoutFeedback,
    Alert, FlatList, Button} from 'react-native';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Ionicons';
import SearchScreen from './screen/SearchScreen';
import HomeScreen from './screen/HomeScreen';
import AddScreen from './screen/AddScreen';
import FavoriteScreen from './screen/FavoriteScreen';
import UserScreen from './screen/UserScreen';

type Props = {};

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions:{
      title:'Home',
      tabBarIcon: ({tintColor,focused})=> (
        focused ? <Image source={require('./assets/tb_home_a.png')} style={styles.tabBarIcon}/> : 
        <Image source={require('./assets/tb_home.png')} style={styles.tabBarIcon}/>
      )
    }
  }
  ,
  Search: {
    screen: SearchScreen,
    navigationOptions:{
      title:'Search',
      tabBarIcon: ({ focused, tintcolor }) =>  (focused ? 
        <Image source={require('./assets/tb_search_a.png')} style={styles.tabBarIcon} /> : 
      <Image source={require('./assets/tb_search.png')} style={styles.tabBarIcon}/>
        ) 
      }
    } ,
  Add: {
    screen: AddScreen,
    navigationOptions:{
      title:'Add',
      tabBarIcon: ({ focused, tintcolor }) =>  (focused ? 
        <Image source={require('./assets/tb_add.png')} style={styles.tabBarIcon}/> : 
      <Image source={require('./assets/tb_add.png')} style={styles.tabBarIcon}/>
        ) 
      }
    } ,
  Favorite: {
    screen: FavoriteScreen,
    navigationOptions:{
      title:'Favorite',
      tabBarIcon: ({ focused, tintcolor }) =>  (focused ? 
        <Image source={require('./assets/tb_heart_a.png')} style={styles.tabBarIcon}/> : 
      <Image source={require('./assets/tb_heart.png')} style={styles.tabBarIcon}/>
        ) 
      }
    } ,
    User: {
      screen: UserScreen,
      navigationOptions:{
        title:'User',
        tabBarIcon: ({ focused, tintcolor }) =>  (focused ? 
          <Image source={require('./assets/tb_user_a.png')} style={styles.tabBarIcon}/> : 
        <Image source={require('./assets/tb_user.png')} style={styles.tabBarIcon}/>
          ) 
        }
      }
},{
  initialRouteName: 'Home',
  tabBarOptions:{
    showLabel:false
  }
},
);

const AppContainer = createAppContainer(TabNavigator);

export default class App extends Component<Props> {
  constructor(props){
    super(props);
  }

  render(){
    return(
      // <View style={{flex: 1, alignItems:'stretch'}}>
      //   <HeaderHome></HeaderHome>
      //   <View style={{backgroundColor:'#000', height: 1, opacity: 0.5 }}></View>
      //   <StoryList></StoryList>
      //   <View style={{backgroundColor:'#000', height: 0.5, opacity: 0.2 }}></View>
      //   <NewFeedList></NewFeedList>
      // </View>
      <AppContainer/>
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
