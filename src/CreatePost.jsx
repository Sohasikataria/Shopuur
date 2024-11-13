import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import IonicIcon from 'react-native-vector-icons/Ionicons';
import React from 'react'
import { Button } from 'react-native-elements'; // Import Button from react-native-elements


const CreatePost = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <TouchableOpacity activeOpacity={0.7} style={styles.backButton}>
          <IonicIcon name='close' size={20} color='black' ></IonicIcon>
        </TouchableOpacity>
        <Text style={styles.containerNoti}>Create Post</Text>
        <Button
          title="Post"
          titleStyle={{ fontWeight: '200', fontSize: 12 }}
          buttonStyle={styles.button}
          containerStyle={styles.buttonContainer}
        />
      </View>
      <View style={styles.container2}>
        <Image
          source={require('../assets/profilepic.png')}
          style={styles.image}
        />
        <View style={styles.subContainer}>
          <Text style={styles.tex}>Johnson Charles</Text>
          <Button
            //title="Anyone"
            icon={<View
              style={{
                flexDirection: 'row',
                alignItems: "center",
                justifyContent: "center",
              }}>
              <IonicIcon name='globe-outline' size={12} ></IonicIcon>
              <Text>Anyone</Text>
              <IonicIcon name='chevron-down' size={18} color='gray' ></IonicIcon>

            </View>}
            titleStyle={{ fontWeight: '200', fontSize: 12 }}
            buttonStyle={styles.buttonn}
            containerStyle={styles.buttonnContainer}

          />

        </View>
      </View>
      <Text style={styles.subtex}>What's on your mind?</Text>

      <View style={styles.Icono}>
        <View style={styles.Ico}>
          <Image
            source={require('../assets/Vector(1).png')}
            style={styles.iimage}
          />
          <Text style={styles.Iconotex}>Upload a Photo or Video.</Text>
        </View>
        <View style={styles.Ico}>
          <Image
            source={require('../assets/Vector(2).png')}
            style={styles.iimage}
          />
          <Text style={styles.Iconotex}>Add Location.</Text>
        </View>
        <View style={styles.Ico}>

          <Image
            source={require('../assets/Vector(3).png')}
            style={styles.iimage}
          />
          <Text style={styles.Iconotex}>Background Color.</Text>
          <View style={styles.Icoo}>
            <IonicIcon name='chevron-down' size={18} color='gray' ></IonicIcon>

          </View>
        </View>
      </View >
      <View style={styles.boxx}>
        {/* <View style={{backgroundColor: 'blue', flex: 0.2, width:30, }} /> */}
        <View style={styles.bboxx}>
          <Image
            source={require('../assets/Rectangle.png')}
            style={styles.iimage}
          />
          <Text style={styles.bbox}>Put and Blast</Text>
        </View>
        <View style={styles.bboxx}>
          <Image
            source={require('../assets/Rectangle4464.png')}
            style={styles.iimage}
          />
          <Text style={styles.bbox}>PSA</Text>
        </View>
        <View style={styles.bboxx}>
          <Image
            source={require('../assets/Rectangle4465.png')}
            style={styles.iimage}
          />
          <Text style={styles.bbox}>Savings</Text>
        </View>
      </View>

    </View>
  )
}

export default CreatePost

const styles = StyleSheet.create({

  mainContainer: {
    //backgroundColor:'red',
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 40,
    marginBottom: 200,
    //marginTop:60,
  },

  container: {
    //margin: 10,
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
    marginVertical: 20,
    flexDirection: 'row',
    //alignContent:'flex-end',
    justifyContent: 'space-between',
    //gap:"80",
  },
  image: {
    borderRadius: 50,
    margin: 10,


  },
  iimage: {
    //borderRadius: 50,
    margin: 10,


  },
  containerNoti: {
    fontWeight: 'bold',
    marginHorizontal: 90,
  },
  button: {
    backgroundColor: '#1DCC2E',
    // borderColor: 'transparent',
    //borderWidth: 0,
    borderRadius: 5,
    height: 35,
    // marginVertical: -20,

  },

  buttonContainer: {
    // marginLeft:10,
    width: 70,
    //justifyContent:'flex-end'
    //marginHorizontal: 10,
    //marginBottom: 10
  },
  buttonn: {
    backgroundColor: 'lightgray',
    borderRadius: 8,
    height: 35,

  },
  buttonnContainer: {
    width: 90,
    //justifyContent:'flex-end'
    marginHorizontal: 70,
    //marginBottom: 10
  },
  subtex: {
    color: 'gray',
    margin: 10,
  },
  tex: {
    fontWeight: 'bold',
  },
  Icono: {
    flexDirection: 'column',
    marginTop: 90,
  },
  Iconotex: {
    color: 'gray',
    marginTop: 8,
  },
  Ico: {
    flexDirection: 'row',
  },
  Icoo: {
    marginHorizontal: 160,
    marginTop: 8,
  },
  boxx: {
    flexDirection: 'row',
    marginLeft: 20,

  },
  bbox: {
    //marginTop:8,
    fontSize: 10,


  },
  bboxx: {
    margin: 10,
    flexDirection: 'column',
    alignItems: 'center',
  },
})