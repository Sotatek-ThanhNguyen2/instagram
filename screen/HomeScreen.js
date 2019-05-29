import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image,
   TouchableHighlight, TouchableNativeFeedback, TouchableWithoutFeedback,
    Alert, FlatList, Button} from 'react-native';
import HeaderHome from './homes/HeaderHome';
import StoryList from './homes/StoryList';
import NewFeedList from './homes/NewFeedList';
    
    class HomeScreen extends React.Component {
      render() {
        return (
        <View style={{flex: 1, alignItems:'stretch'}}>
          <HeaderHome></HeaderHome>
          <View style={{backgroundColor:'#000', height: 1, opacity: 0.5 }}></View>
          <StoryList></StoryList>
          <View style={{backgroundColor:'#000', height: 0.5, opacity: 0.2 }}></View>
          <NewFeedList></NewFeedList>
        </View>
        );
      }
    }
    export default HomeScreen