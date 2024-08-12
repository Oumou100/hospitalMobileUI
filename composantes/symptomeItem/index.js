import { View, Text, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { styles } from './style'

const SymptomItem = ({item}) => {
  return (
    <TouchableOpacity >
        <View style={styles.item}>
        <Image style={styles.itemImg} 
        source={require('../../assets/images/tete.png')} />
        
        <Text>{item.libelle}</Text>

        </View>
    </TouchableOpacity>
  )
}

export default SymptomItem