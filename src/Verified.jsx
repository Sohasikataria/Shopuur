import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import React from 'react';
import CheckBox from 'react-native-check-box';
import IonicIcon from 'react-native-vector-icons/Ionicons';

const Verified = ({ navigation }) => {
  const [number, setNumber] = React.useState('');
  const [isSelected, setSelection] = React.useState(false);

  const handleHome = () => {
    navigation.navigate('Home'); // Navigates to the GetCode screen
  };

  return (
    <View style={styles.mainContainer}>
    <View style={styles.container1}>
       <TouchableOpacity activeOpacity={0.7} style={styles.backButton}>
         <IonicIcon name='chevron-back-outline' size={24} color='gray' ></IonicIcon>
         </TouchableOpacity>
     </View>
<View style={styles.container}>
      <Text style={styles.welcomeText}>Verified</Text>
      <Text style={styles.centeredText}>
        Don't forget that you can always edit your personal information and preferences by tapping on the settings icon.
      </Text>

      <View style={styles.checkboxRow}>
      <CheckBox
          isChecked={isSelected}
          onClick={() => setSelection(!isSelected)}
          style={styles.checkbox} // Adjust size here
          checkBoxColor='gray'
        />
        <Text style={styles.centeredTextt}>
          By Signing up, I agree to the{' '}
          <Text style={{ color: '#1DCC2E' }}>Terms and Conditions</Text>
          <Text> and </Text>
          <Text style={{ color: '#1DCC2E' }}>Privacy and Policy.</Text>
        </Text>
      </View>

      <Button
        title="Get Started"
        onPress={handleHome}
        iconContainerStyle={{ marginRight: 10 }}
        titleStyle={{ fontWeight: '200', fontSize: 18 }}
        buttonStyle={styles.button}
        containerStyle={styles.buttonContainer}
      />
    </View>
    </View>
  );
}
export default Verified;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor:"white",
    boxShadow:"black",
    borderColor:"black",
    marginVertical:50,
    marginHorizontal:20,
    borderRadius:30,
    maxHeight:450,
    maxwidth:340,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container1: {
    flexDirection: 'row',
    marginVertical: 20,    // Arrange items in a row
    justifyContent: 'space-between',
    // alignItems: 'flex-end', // Aligns "Skip all" to the right of the screen
    //paddingHorizontal: 20,
    //paddingTop: 20,
  },
  centeredText: {
    color: 'gray',
    textAlign: 'center',
    marginBottom: 50,
    fontSize: 16,
  },
  centeredTextt: {
    color: 'black',
    textAlign: 'center',
    fontSize: 16,
    marginLeft: 10, // Space between checkbox and text
    flexShrink: 1, // Allows text to wrap if needed
  },
  welcomeText: {
    color: '#4A4A4A',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 30,
    
  },
  checkboxRow: {
    flexDirection: 'row',
   // alignItems: 'center',
    marginBottom: 20,
    // marginHorizontal: 30,
    // textAlign:"left",
    // justifyContent:"left"
  },
  checkbox: {
    alignSelf: 'auto',
  },
  button: {
    backgroundColor: '#1DCC2E',
    borderRadius: 30,
    marginVertical: 20,
    height: 60,
  },
  buttonContainer: {
    width: 250,
    marginHorizontal: 50,
    marginTop: 20,
  },
});
