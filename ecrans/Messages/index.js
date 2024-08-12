import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { fakeChats } from '../../fakeData/fakeChats'
import MessageList from '../../composantes/MessageList'

const Messages = () => {
  return (
    // <View>
    //   <Text>Ecran de messagerie</Text>
    // </View>
    <FlatList data={fakeChats} 
    keyExtractor={item=>item.id} 
    renderItem={({item})=>{
      return(
      <MessageList item={item}></MessageList>
    );}}/>
  )
}

export default Messages