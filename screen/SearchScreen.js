
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image,
   TouchableHighlight, TouchableNativeFeedback, TouchableWithoutFeedback,
    Alert, FlatList, Button} from 'react-native';

class SearchScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Search!</Text>
          <Button
            title="Go to Home"
            onPress={() => this.props.navigation.navigate('Home')}
          />
        </View>
      );
    }
  }

export default SearchScreen; // Don’t forget to use export default!
