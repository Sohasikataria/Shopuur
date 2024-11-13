import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import { Button } from 'react-native-elements'; // Import Button from react-native-elements



const Following = () => {
  return (
    <View style={styles.mainContainer}>
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.7} style={styles.backButton}>
        <IonicIcon name='chevron-back-outline' size={20} color='gray' ></IonicIcon>
      </TouchableOpacity>
      <Text style={styles.containerNoti}>Notification</Text>
    </View>
    <View style={styles.container1}>
        <IonicIcon name='search-outline' size={20} ></IonicIcon>

        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          onBlur={() => handleBlur('text')}
          value={text}
          placeholder="Search Location"
          placeholderTextColor={'gray'}

        />

      </View>
      <View style={styles.container2}>
        <Image
          source={require('../assets/profilepic.png')}
          style={styles.image}
        />
        <View style={styles.subCont}>
          <View style={styles.subContainer}>
            <Text style={styles.tex}>Maria started following you!</Text>
            <Text style={styles.subtex}>2 min ago</Text>
          </View>

          <Button
            title="Follow"
            //onPress={gohome}
            iconContainerStyle={{ marginRight: 10 }}
            titleStyle={{ fontWeight: '200', fontSize: 12 }}
            buttonStyle={styles.button}
            containerStyle={styles.buttonContainer}
          />
        </View>
      </View>
    </View>
  )
}

export default Following

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        marginHorizontal: 10,
        marginVertical: 30
      },
      container: {
        margin: 10,
        flexDirection: 'row',
       // gap: 100,
        //justifyContent: 'space-between',
    
      },
      container1: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        // width: '70%',
        height: 40,
        margin: 10,
        paddingLeft: 10,
        borderRadius: 30,
        color: '#1DCC2E',
        borderColor: 'gray',
    
      },
      input: {
        flex: 1,
        width: '100%',
        height: 50,
        paddingleft: 10,
        borderRadius: 10,
        color: '#1DCC2E',
    
      },
      container2: {
        flexDirection: 'row',
      },
      subContainer: {
        flexDirection: 'column',
      },
      image: {
        borderRadius: 50,
        margin: 10,
    
      },
      subCont: {
        flexDirection: 'row',
      },
      tex: {
        color: 'black',
      },
      subtex: {
        color: 'gray',
      },
      button: {
        backgroundColor: '#1DCC2E',
        // borderColor: 'transparent',
        //borderWidth: 0,
        borderRadius: 10,
        //marginVertical: 20,
    
      },
      buttonContainer: {
        width: 100,
        marginHorizontal: 20,
        //marginTop: 10
      },

})