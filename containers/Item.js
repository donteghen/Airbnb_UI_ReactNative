import React from 'react'
import { View, StyleSheet, Text, Image} from 'react-native'


export default function Item ({item}) {
    //console.log(item)
    return (
        <View style={styles.container}>
            <View style={styles.item_content}>
                <View>
                    <Image source={item.src} style={styles.imageStyle}/>
                </View>
                <View><Text style={styles.text_style}>{item.title}</Text></View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        borderWidth:0,
        borderColor:'transparent',
        shadowOffset:{width:0, height:0},
        shadowOpacity:0.2,
        elevation:2,
        padding:4,
        margin:10
    },
    item_content:{
        flex:1,
        width:130,
        height:110
    },
    imageStyle:{
        width:'100%',
        height:'80%'
    },
    text_style:{
        
        textAlign:'center'
    }
})