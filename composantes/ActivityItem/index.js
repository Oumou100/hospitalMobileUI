import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import SVG_HOSPITAL from '../../assets/images/sgv/undraw_medicine_b-1-ol.svg'
import { styles } from './style'

const ActivityItem = ({item}) => {
  return (
    <TouchableOpacity style={styles.scrollableListItem}>
          <SVG_HOSPITAL width={48} height={40}/>
          <Text style={styles.mainText}>{item.mainText}</Text>
          <Text style={styles.subText}>{item.subText}</Text>
        </TouchableOpacity>
  )
}

export default ActivityItem