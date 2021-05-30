import React from 'react';
import { StyleSheet, Text, View, Platform, StatusBar , TextInput, SafeAreaView, FlatList} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Item from '../containers/Item';

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
        id: '511694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
      },
  ];

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
            </View>
            <View style={styles.list_container}>
                <View style={styles.heading}><Text style={styles.heading_text}>Want to explore new destinations or what? </Text></View>
                <FlatList data={DATA} renderItem={renderItem} keyExtractor={item => item.id} horizontal={true}/>
            </View>
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
    height: Platform.OS === 'android' ? StatusBar.currentHeight + 80 : 50,
    elevation: 1,
    shadowOffset:{width:0, height:0},
    shadowOpacity:0.2
    
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
    fontSize: 30,
    fontWeight:'bold',
    fontStyle:'italic',
    textAlign:'center'
  },
  list_container:{
    
    padding: 10,
    
  },
});