import React from 'react';
import {Image, View, Text, Dimensions, StyleSheet} from 'react-native'
import StarRating from 'react-native-star-rating'
export default function Carousel ({width, attr}) {
    
    return (
        <View style={{ width:width/2 -30, height:width/2 -30, borderColor:'transparent', borderWidth:1, marginVertical:10,
     elevation:3, shadowOffset:{width:0, height:0}}}>
                   <View style={{flex:1}}>
                      <Image source={require('../assets/restaurant.jpeg')}  style={{ flex:1, width:null, resizeMode:'cover', height:null}}/>
                   </View>
                   <View style={{flex:1, justifyContent:'space-evenly', alignItems:'flex-start', paddingLeft:10}}>
                      <Text style={{color:'red', fontSize:12}}>{attr.title}</Text>
                      <Text style={{fontSize:10, fontWeight:'bold'}}>{attr.name}</Text>
                      <Text style={{fontSize:12}}>${Math.floor(attr.price)}</Text>
                      <StarRating 
                          maxStars={5}
                          fullStarColor='green'
                          rating={attr.starRating}
                          starSize={8}
                      />
                   </View>
                </View>
    )
}

const styles = StyleSheet.create({
 
})