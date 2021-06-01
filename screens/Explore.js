import React from 'react';
import { StyleSheet, Text, View, Platform, StatusBar , Image, TextInput, Dimensions,
  SafeAreaView, FlatList, ScrollView, Animated} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Item from '../containers/Item';
import Carousel from '../containers/Carousel';
import {DATA, HOMES} from '../mock'
import Tag from '../containers/Tag';
const {width} = Dimensions.get('window');
const screenWidth = Dimensions.get('screen').width

export default function Explore() {
    const renderItem = ({item}) =>{
        return (
            <Item item={item}/>
        )
    }
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.container_wrapper}>
            <View style={styles.content}>
                <View style={styles.search_content}>
                    <MaterialCommunityIcons name='map-search' size= {24}/>
                    <TextInput placeholder='Search...'  style={styles.search_text}/>
                </View>
                <Animated.View  style={{flexDirection:'row', position:'relative', top:5,
                marginHorizontal:10, }}>
                  <Tag name='Guests'/>
                  <Tag name='Dates'/>
                </Animated.View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.horizontal_list_container}>
                  <View style={styles.heading}><Text style={styles.heading_text}>Want to explore new destinations or what? </Text></View>
                  <FlatList data={DATA} renderItem={renderItem} showsHorizontalScrollIndicator={false}
                  keyExtractor={item => item.id} horizontal={true}/>
              </View>
              <View style={styles.horizontal_list_container}>
                  <View style={styles.heading}><Text style={styles.heading_text}>Introducing Airbnb Plus </Text></View>
                  <View style={{width:width - 20, height:200}}>
                    <Image source={require('../assets/home.jpeg')} style={styles.home_image}/>
                  </View>
              </View>
              <View style={{marginTop:20, paddingHorizontal:10}}>
                 <View><Text style={{fontWeight:'bold', fontSize:20, fontStyle:'italic', paddingHorizontal:10}}>Homes around the world</Text></View>
                 <View style={{flexDirection:'row', flexWrap:'wrap', paddingHorizontal:10, justifyContent:'space-between'}}>
                  {HOMES.map(home => <Carousel width={width} attr={home} key={home.id}/>)}
                  {/* <Carousel width={width} attr={HOMES}/> */}
                 </View>
              </View>
            </ScrollView>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  container_wrapper:{
      flex:1
  },
  content:{
    
    borderBottomColor:'transparent',
    borderBottomWidth:2,
    height: Platform.OS === 'android' ? StatusBar.currentHeight + 120 : 80,
    shadowOffset:{width:0, height:0},
    shadowOpacity:0.3,
    marginBottom:20,
    paddingBottom:10,
    elevation:2
  },
  search_content:{
      display:'flex',
      flexDirection:'row',
      marginTop:30,
      borderColor:'transparent',
      shadowOffset:{width:0, height:0},
      shadowOpacity: 0.3,
      elevation:2,
      padding : 15,
      margin:10,
      
  },
  search_text:{
      marginLeft: 10,
      fontSize:18
  },
  heading:{
      
  },
  heading_text:{
    fontSize: 20,
    fontWeight:'bold',
    fontStyle:'italic',
    padding:4
  },
  horizontal_list_container:{
    padding: 10,
  },
  home_image:{
    flex:1, 
    borderWidth:2,
    borderRadius:2,
    borderColor:'transparent',
    width:'100%', 
    height:'100%',
    shadowOffset: {width:0, height:0},
    shadowOpacity:0.3,
    resizeMode:'cover',
    
  }
});