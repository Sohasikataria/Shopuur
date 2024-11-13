import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import { Button } from 'react-native-elements'; // Import Button from react-native-elements


const Notification = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <TouchableOpacity activeOpacity={0.7} style={styles.backButton}>
          <IonicIcon name='chevron-back-outline' size={20} color='gray' ></IonicIcon>
        </TouchableOpacity>
        <Text style={styles.containerNoti}>Notification</Text>
      </View>
      <View style={styles.container1}>
        <Text style={styles.text}>Today</Text>
        <Text style={styles.text}>Clear</Text>
      </View>
      <View style={styles.container2}>
        <Image
          source={require('../assets/profilepic.png')}
          style={styles.image}
        />
        <View style={styles.subContainer}>
          <Text style={styles.tex}>Julia Jane Liked Your Post.</Text>
          <Text style={styles.subtex}>2 min ago</Text>
        </View>
      </View>

      <View style={styles.container2}>
        <Image
          source={require('../assets/profilepic.png')}
          style={styles.image}
        />
        <View style={styles.subContainer}>
          <View style={styles.lighttexcont}>
            <Text style={styles.tex}>Josh Little commented on Your Post.</Text>
            <Text style={styles.lighttex}>1h ago</Text>
          </View>
          <Text style={styles.subtex}>"I would recommended that!"</Text>
        </View>
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
      <View style={styles.container1}>
        <Text style={styles.text}>Yesterday</Text>

      </View>
      <View style={styles.container2}>
        <Image
          source={require('../assets/profilepic.png')}
          style={styles.image}
        />
        <View style={styles.subContainer}>
          <Text style={styles.tex}>Jason James Liked your post.</Text>
          <Text style={styles.subtex}>1 day ago</Text>
        </View>
      </View>
      <View style={styles.container2}>
        <Image
          source={require('../assets/profilepic.png')}
          style={styles.image}
        />
        <View style={styles.subCont}>
          <View style={styles.subContainer}>
            <Text style={styles.tex}>Carlos started following you!</Text>
            <Text style={styles.subtex}>1 day ago</Text>
          </View>
          <Button
            title="Following"
            //onPress={gohome}
            iconContainerStyle={{ marginRight: 10 }}
            titleStyle={{ fontWeight: '200', fontSize: 12 }}
            buttonStyle={styles.buttonn}
            containerStyle={styles.buttonContainer}
          />
        </View>

      </View>
      <View style={styles.container2}>
        <Image
          source={require('../assets/profilepic.png')}
          style={styles.image}
        />
        <View style={styles.subContainer}>
          <View style={styles.lighttexcont}>
            <Text style={styles.tex}>Brandon commented on your post.</Text>
            <Text style={styles.lighttex}>1 day ago</Text>
          </View>
          <Text style={styles.subtex}>"I was also searching about it."</Text>
        </View>
      </View>
      <View style={styles.container2}>
        <Image
          source={require('../assets/profilepic.png')}
          style={styles.image}
        />
        <View style={styles.subContainer}>
          <Text style={styles.tex}>Helena James Liked your post.</Text>
          <Text style={styles.subtex}>1 day ago</Text>
        </View>
      </View>

      <View style={styles.container1}>
        <Text style={styles.text}>Past week</Text>
      </View>
      <View style={styles.container2}>
        <Image
          source={require('../assets/profilepic.png')}
          style={styles.image}
        />
        <View style={styles.subContainer}>
          <Text style={styles.tex}>Sophie shared your post.</Text>
          <Text style={styles.subtex}>3 days ago</Text>
        </View>
      </View>
      <View style={styles.container2}>
        <Image
          source={require('../assets/profilepic.png')}
          style={styles.image}
        />
        <View style={styles.subContainer}>
          <Text style={styles.tex}>Jennifer Liked your post.</Text>
          <Text style={styles.subtex}>4 days ago</Text>
        </View>
      </View>
      <View style={styles.container2}>
        <Image
          source={require('../assets/profilepic.png')}
          style={styles.image}
        />
        <View style={styles.subContainer}>
          <Text style={styles.tex}>Awais Liked your post.</Text>
          <Text style={styles.subtex}>4 days ago</Text>
        </View>
      </View>
      <View style={styles.container2}>
        <Image
          source={require('../assets/profilepic.png')}
          style={styles.image}
        />
        <View style={styles.subContainer}>
          <Text style={styles.tex}>Shayan Liked your post.</Text>
          <Text style={styles.subtex}>4 days ago</Text>
        </View>
      </View>
    </View>
  )
}

export default Notification

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
    margin: 10,
    flexDirection: 'row',
    gap: 100,
    justifyContent: 'space-between',

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
  containerNoti: {
    fontWeight: 'bold',
    marginHorizontal: 90,
  },
  text: {
    //color:'red',
    fontWeight: 'bold',
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
  buttonn: {
    backgroundColor: 'gray',
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
  subCont: {
    flexDirection: 'row',
  },
  lighttexcont: {
    flexDirection: 'row',
    //margin: 10,
    gap: 30,

    justifyContent: 'space-between',
  },
  lighttex: {
    color: 'gray',
    marginVertical: 3,
    fontSize: 10,
  },
})