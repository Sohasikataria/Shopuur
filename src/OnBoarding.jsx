import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import { Button } from 'react-native-elements'; // Import Button from react-native-elements
import Swiper from 'react-native-swiper';
import IonicIcon from 'react-native-vector-icons/Ionicons';





const OnBoarding = ({ navigation }) => {
  const handleSignup = () => {
    navigation.navigate('Signup');
  };

  return (
    <Swiper
      activeDotColor='#1DCC2E'>
      <View style={styles.slide1}>
        <View style={styles.mainContainer}>
          <View style={styles.container0}>
            <TouchableOpacity activeOpacity={0.7} onPress={handleSignup}>
              <Text style={styles.skiptextt}>Skip all</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.container}>
            <Image
              source={require('../assets/undraw1.png')}
              style={styles.image}
            />
            <Text style={styles.welcomeText}>Welcome to Shopuur!</Text>
            <Text style={styles.centeredText}>
              Your go-to app for real-time pricing updates and budgeting tools.
            </Text>


            <TouchableOpacity activeOpacity={0.7}>
              <Button
                onPress={handleSignup}
                title="Signup/Login"
                iconContainerStyle={{ marginRight: 10 }}
                //titleStyle={{ fontWeight: '700' }}
                buttonStyle={styles.button}
                containerStyle={styles.buttonContainer}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>



      <View style={styles.slide2}>
        <View style={styles.mainContainer}>
          <View style={styles.container1}>
            <TouchableOpacity activeOpacity={0.7} style={styles.backButton}>
              <IonicIcon name='chevron-back-outline' size={20} color='gray' ></IonicIcon>
            </TouchableOpacity>
            {/* Skip Text */}
            <TouchableOpacity activeOpacity={0.7} onPress={handleSignup}>
              <Text style={styles.skiptext}>Skip</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.container}>
            <Image
              source={require('../assets/slider2.png')}
              style={styles.image}
            />
            <Text style={styles.welcomeText}>Turn on Location Services</Text>
            <Text style={styles.centeredText}>
              To get the best shopping experience, Shopuur needs to access your location. This allows us to show you tax percentages for your purchases.
            </Text>

            <TouchableOpacity activeOpacity={0.7} >
              <Button
                onPress={handleSignup}
                title="Allow Location Access"
                iconContainerStyle={{ marginRight: 10 }}
                //titleStyle={{ fontWeight: '500' }}
                buttonStyle={styles.button}
                containerStyle={styles.buttonContainer}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSignup}>
              <Text style={styles.centeredText} >
                Not now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>


      <View style={styles.slide3}>
        <View style={styles.mainContainer}>
          <View style={styles.container1}>
            <TouchableOpacity activeOpacity={0.7} style={styles.backButton}>
              <IonicIcon name='chevron-back-outline' size={20} color='gray' ></IonicIcon>
            </TouchableOpacity>
            {/* Skip Text */}
            <TouchableOpacity activeOpacity={0.7} onPress={handleSignup}>
              <Text style={styles.skiptext}>Skip</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.container}>
            <Image
              source={require('../assets/Slider3.png')}
              style={styles.image1}
            />
            <Text style={styles.welcomeText}>Scan items to get real-time pricing updates.</Text>

            <Text style={styles.centeredText}>
              Use OCR technology to record pricing of items and determine local tax percentages.
            </Text>


            <TouchableOpacity activeOpacity={0.7}>
              <Button
                onPress={handleSignup}
                title="Let's get started!"
                iconContainerStyle={{ marginRight: 10 }}
                //titleStyle={{ fontWeight: '500' }}
                buttonStyle={styles.button}
                containerStyle={styles.buttonContainer}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>




      <View style={styles.slide4}>
        <View style={styles.mainContainer}>
          <View style={styles.container1}>
            <TouchableOpacity activeOpacity={0.7} style={styles.backButton}>
              <IonicIcon name='chevron-back-outline' size={20} color='gray' ></IonicIcon>
            </TouchableOpacity>
            {/* Skip Text */}
            <TouchableOpacity activeOpacity={0.7} onPress={handleSignup}>
              <Text style={styles.skiptext} >Skip</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.container}>
            <Image
              source={require('../assets/Slider4.png')}
              style={styles.image}
            />
            <Text style={styles.welcomeText}>Set a budget and track your expenses.</Text>

            <Text style={styles.centeredText}>
              Shopuur's budgeting tools can help you save money and stay on track.
            </Text>


            <TouchableOpacity activeOpacity={0.7}>
              <Button
                title="Show me how!"
                onPress={handleSignup}
                iconContainerStyle={{ marginRight: 10 }}
                //titleStyle={{ fontWeight: '500' }}
                buttonStyle={styles.button}
                containerStyle={styles.buttonContainer}
              />
            </TouchableOpacity>

          </View>
        </View>
      </View>



      <View style={styles.slide5}>
        <View style={styles.mainContainer}>
          <View style={styles.container1}>
            <TouchableOpacity activeOpacity={0.7} style={styles.backButton}>
              <IonicIcon name='chevron-back-outline' size={20} color='gray'></IonicIcon>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7} onPress={handleSignup}>
              <Text style={styles.skiptext} >Skip</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.container}>
            <Image
              source={require('../assets/Slider5.png')}
              style={styles.image2}
            />
            <Text style={styles.welcomeText}>Stay Informed & Share updates.</Text>
            <Text style={styles.centeredText}>
              Stay informed about local pricing trends and share your insights with the community.
            </Text>



            <TouchableOpacity activeOpacity={0.7} >
              <Button
                onPress={handleSignup}
                title="Join Conversation!"
                iconContainerStyle={{ marginRight: 10 }}
                //titleStyle={{ fontWeight: '500' }}
                buttonStyle={styles.button}
                containerStyle={styles.buttonContainer}
              />
            </TouchableOpacity>

          </View>
        </View>
      </View>


    </Swiper>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container0: {
    alignItems: 'flex-end', // Aligns "Skip all" to the right of the screen
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  container1: {
    flexDirection: 'row',
    marginVertical: 20,    // Arrange items in a row
    justifyContent: 'space-between',
    // alignItems: 'flex-end', // Aligns "Skip all" to the right of the screen
    //paddingHorizontal: 20,
    //paddingTop: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredText: {
    color: 'gray',
    textAlign: 'center',
    marginHorizontal: 30,
    marginTop: 30
  },
  centeredTextt: {
    color: 'gray',
    textAlign: 'center',

  },
  skiptext: {
    color: 'gray',
    paddingTop:10,
    paddingHorizontal:20,
    fontSize: 16,

  },
  skiptextt: {
    color: 'gray',
    paddingTop:10,
    paddingHorizontal:5,
    fontSize: 16,

  },

  welcomeText: {
    color: '#1DCC2E',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 30,
    marginHorizontal: 30

  },

  image: {
    width: 200,
    height: 200,
    borderRadius:50,
    marginBottom: 20,
  },
  image1: {
    width: 170,
    height: 200,
    marginBottom: 20,
  },
  image2: {
    width: 300,
    height: 150,
    marginBottom: 20,
  },
  backButton: {
    marginRight: 10,
    padding: 10, // Add padding to make the button area larger
    alignItems: 'center', // Center the icon within the button
  },
  button: {
    backgroundColor: '#1DCC2E',
    borderColor: 'transparent',
    borderWidth: 0,
    borderRadius: 30,
    marginVertical: 20,

  },
  buttonContainer: {
    width: 200,
    marginHorizontal: 50,
    marginTop: 50
  },

  wrapper: {

  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  slide4: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  slide5: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  text: {
    color: '#1DCC2E',
    fontSize: 30,
    //fontWeight: 'bold'
  }
});
