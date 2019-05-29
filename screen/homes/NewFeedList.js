

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image,
   TouchableHighlight, TouchableNativeFeedback, TouchableWithoutFeedback,
    Alert, FlatList, Button} from 'react-native';

class NewFeedList extends Component{

    render(){
      return(
        <View style={{backgroundColor:'#fff',
         flex:1 }}>
          <FlatList data={[{firstItem:false, content:"Park hang seo"}
          , {firstItem:true, content:"Park hang seo"}
          , {firstItem:true, content:"Park hang seo"}
          , {firstItem:true, content:"Park hang seo"}
          , {firstItem:true, content:"Park hang seo"}
          , {firstItem:true, content:"Park hang seo"}
          , {firstItem:true, content:"Park hang seo"}]} 
          renderItem = {({item})=> ( 
                <View style={{flex:1}}>
                {/* header */}
                  <View style={{height:60, flexDirection:'row'}}>
                    <View style={{flex:1, flexDirection:'row', alignItems:'center',
                    justifyContent:'flex-start'}}>
                      <TouchableWithoutFeedback onPress={() => this.selectStoryItem(item)}>
                          <View style={styles.smallStoryListCircle}>
                            <Image source={require('../../assets/vn.png')}
                              style={{borderRadius:15, borderColor:'#345',
                              borderWidth:1, width:30, height:30}}>
                              </Image>
                          </View>
                      </TouchableWithoutFeedback>
                      <Text>mia</Text>
                    </View>
                    
                    <View style={{flex:1, alignItems:'flex-end', justifyContent:'center'}}>
                      <TouchableNativeFeedback onPress={()=>{this.selectStoryItem(item)}}>
                        <Image source={require('../../assets/menu.png')} style={{ width:25, height:25}}/>
                      </TouchableNativeFeedback>
                    </View>
                  </View>
                {/* middle */}
                  <Image source={require('../../assets/vn.png')} style={{height:250, width:null}}/>
                {/* footer */}
                  <View style={{flex:1, flexDirection:'row'}}>
                    <View style={{flex:1, flexDirection:'row'}}>
                      <TouchableWithoutFeedback onPress={() => this.selectStoryItem(item)}>
                          <Image source={require('../../assets/tb_heart.png')} style={{ width:25, height:25, margin:10}}/>
                      </TouchableWithoutFeedback>

                      <TouchableWithoutFeedback onPress={() => this.selectStoryItem(item)}>
                          <Image source={require('../../assets/comment.png')} style={{ width:25, height:25, margin:10}}/>
                      </TouchableWithoutFeedback>

                      <TouchableWithoutFeedback onPress={() => this.selectStoryItem(item)}>
                          <Image source={require('../../assets/send.png')} style={{ width:25, height:25, margin:10}}/>
                      </TouchableWithoutFeedback>
                    </View>

                    <View style={{flex:1, alignItems:'flex-end'}}>
                      <TouchableWithoutFeedback onPress={() => this.selectStoryItem(item)}>
                          <Image source={require('../../assets/bookmark.png')} style={{ width:25, height:25, margin:10}}/>
                      </TouchableWithoutFeedback>

                    </View>
                  </View>
                  <Text style={{marginLeft:10}}>Likes! 891 times</Text>
                  <View style={{flexDirection:'row', paddingLeft:10}}>
                   <Text style={{fontWeight: 'bold',position:'absolute', left:10, top:0}}>mia</Text>               
                    <Text style={{marginLeft:0, flex:1}} 
                    renderTruncatedFooter={()=>{return(<Text>Read more</Text>)}}
                     numberOfLines={2}>        Ban đầu, King’s Cup 2019 có sự góp mặt của 4 đội tuyển gồm Việt Nam, Trung Quốc, Ấn Độ và chủ nhà Thái Lan. Nhưng vào phút chót, Trung Quốc, rồi sau đó là El Salvador cũng xin rút lu và ĐT Curacao là đội thế chỗ.</Text>               
              

                  </View>
                </View>
              
           )
          }
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

    smallStoryListCircle:{
      borderRadius:17, borderColor:'#567565', 
      borderWidth:2, width:34, height:34, justifyContent:'center',
       alignItems:'center', margin:10
    }
  });
  
  export default NewFeedList