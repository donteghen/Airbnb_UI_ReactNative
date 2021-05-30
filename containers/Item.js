import React from 'react'
import { View, StyleSheet, Text} from 'react-native'

export default function Item ({item}) {
    //console.log(item)
    return (
        <View style={styles.container}>
            <Text style={styles.item_content}>{item.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        textAlign:'center'
    },
    item_content:{
        textAlign:'center',
        backgroundColor:'#0275d8',
        padding:10,
        margin:5
    }
})