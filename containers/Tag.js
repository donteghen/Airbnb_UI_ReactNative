import React from 'react'
import {Text, View} from 'react-native'
export default function Tag ({name}) {
    return (
       <> 
            <View style={{ backgroundColor:'white', borderWidth:1, 
                  borderColor:'grey', padding:5, marginRight:5}}>
                <Text style={{fontSize:14, fontWeight:'bold'}}>{name}</Text>
            </View>
        </>
    )
}