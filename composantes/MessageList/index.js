import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import styles from './style'

const MessageList = (item) => {
  return (
    <TouchableOpacity style={styles.messagesContainer}>
        <Image 
        source={{
            uri: 'https://media.istockphoto.com/id/1470505351/photo/portrait-of-a-smiling-doctor-holding-glasses-and-a-mobile-phone-at-the-office.webp?b=1&s=170667a&w=0&k=20&c=8CebFLF4PFnt9JYJznGhYoOQxcyHLVpTGVfkvEsZd2Q=' ,}}
        style={styles.messageImg}
        />

        <View style={styles.messageInfo}>
            <Text style={styles.messageUser}>{item.fullname}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default MessageList