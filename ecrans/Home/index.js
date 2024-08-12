import { View, Text, ScrollView, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import './style.js'
import dashboardStyles from './style.js'
import { fakeActivity } from '../../fakeData/fakeActivity.js'
import ActivityItem from '../../composantes/ActivityItem/index.js'
import { fakeSymptomes } from '../../fakeData/fakeSymptome.js'
import SymptomItem from '../../composantes/symptomeItem/index.js'
import { fakeDoctor } from '../../fakeData/fakeDoctor.js'
const Home = () => {
  return (
    <ScrollView>
      {/* Debut du header */}
      <View style={dashboardStyles.header}>
        <Text style={dashboardStyles.userName}>Oumou Koné</Text>
        <Image source={require('../../assets/photo_profile.jpg')} style={dashboardStyles.userImg}/>
      </View>
      {/* Fin du header */}
      {/* Liste des activités */}
      <FlatList data={fakeActivity} 
      keyExtractor={item =>item.id} 
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={dashboardStyles.scrollableList}
      renderItem={({item})=>{
        return(
        <ActivityItem item={item}/>
      );}}/>
      {/* Fin de la liste des activités */}
      {/* Liste des symptomes */}
      <View style={dashboardStyles.title}>
        <Text style={dashboardStyles.titleBold}>Quel symtômes avez vous?</Text>
      </View>
      <FlatList data={fakeSymptomes} 
      keyExtractor={item =>item.id} 
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={dashboardStyles.scrollableList}
      renderItem={({item})=>{
        return(
        <SymptomItem item={item}/>
      );}}/>
      {/* Fin liste des symptomes */}
      {/* Liste des symptomes */}
      <View style={dashboardStyles.title_space_between}>
        <Text style={dashboardStyles.titleBold}>Nos docteurs</Text>
        <TouchableOpacity>
          <Text style={dashboardStyles.link}>Afficher tout</Text>
        </TouchableOpacity>
        
      </View>
        <View style={dashboardStyles.doctorContainer}>
        {fakeDoctor.splice(0,3).map((doctor,index)=>{
            return (
              <TouchableOpacity key={doctor.id}
               style={dashboardStyles.doctorCard}>
                <Image 
                  source={{uri: `${doctor.img}`}}
                  style={dashboardStyles.doctorImg}  />
                  <View style={dashboardStyles.doctorInfo}>
                    <Text style={dashboardStyles.doctorName}>{doctor.fullname}</Text>
                    <Text style={dashboardStyles.doctorSpec}>{doctor.speciality}</Text>
                </View>
              </TouchableOpacity>
            );
          })
        }
        </View>
      {/* Fin liste des symptomes */}
    </ScrollView>
  )
}

export default Home