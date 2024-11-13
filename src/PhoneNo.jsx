import { StyleSheet, Text, View, TextInput,TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements'; // Import Button from react-native-elements
import React from 'react';
import IonicIcon from 'react-native-vector-icons/Ionicons';


const PhoneNo = ({ navigation }) => {
  const [number, setNumber] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');

  // Function to handle text change and validation
  const handleTextChange = (input) => {
    // Allow only numbers in the input
    const isValid = /^[0-9]*$/.test(input);

    if (isValid || input === '') { // Allow empty input for deletion
      setNumber(input);
      setErrorMessage(''); // Clear any previous error message
    } else {
      setErrorMessage('Please enter a valid phone number'); // Set error message for invalid input
    }
  };

  // Function to handle verification
  const handleGetCode = () => {
    if (number.length === 11) { // Validate phone number length
      navigation.navigate('GetCode'); // Navigate to the Verified screen
    } else {
      setErrorMessage('Phone number must be 11 digits long'); // Set error message for incorrect length
    }
  };

  return (
    <View style={styles.mainContainer}>
         <View style={styles.container1}>
            <TouchableOpacity activeOpacity={0.7} style={styles.backButton}>
              <IonicIcon name='chevron-back-outline' size={24} color='gray' ></IonicIcon>
              </TouchableOpacity>
          </View>
    <View style={styles.container}>
  
      <Text style={styles.welcomeText}>Enter Your Phone Number</Text>
      
      <View style={[styles.containerr, { borderColor: number ? '#1DCC2E' : 'gray' }]}>
      <IonicIcon name="phone-portrait-sharp" size={24} color={number ? '#1DCC2E' : 'gray'} ></IonicIcon>
      <TextInput
        style={styles.input} 
        onChangeText={handleTextChange}  
        value={number} 
        placeholder="Phone Number"
        placeholderTextColor={"gray"} 
        keyboardType="phone-pad" // Show numeric keyboard
        maxLength={11} // Limit input to 11 characters
      />
      </View>
      {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null} {/* Display error message if any */}

      <Button
        title="Verify"
        onPress={handleGetCode}
        iconContainerStyle={{ marginRight: 10 }}
        titleStyle={{ fontWeight: '200', fontSize: 20 }}
        buttonStyle={[styles.button, { backgroundColor: number.length === 11 ? '#1DCC2E' : 'gray' }]} // Change button color based on input validity
        containerStyle={styles.buttonContainer}
        disabled={number.length !== 11} // Disable button if number is not valid
      />
    </View>
    </View>
  );
}

export default PhoneNo;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  container1: {
    flexDirection: 'row',
    marginVertical: 20,    // Arrange items in a row
    justifyContent: 'space-between',
    // alignItems: 'flex-end', // Aligns "Skip all" to the right of the screen
    //paddingHorizontal: 20,
    //paddingTop: 20,
  },
  welcomeText: {
    color: '#4A4A4A', 
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 30,
    marginBottom: 10,
  },
  errorText: {
    color: 'red', 
    marginTop: 10,
    textAlign: 'center',
  },
  button: {
    borderWidth: 0,
    borderRadius: 30,
    marginVertical: 20,
    height:60,
  },
  buttonContainer: {
    width: 200,
    marginHorizontal: 50,
    marginTop: 20,
  },
  backButton: {
    marginRight: 10,
    padding: 10, // Add padding to make the button area larger
    alignItems: 'center', // Center the icon within the button
  },
  input: {
    width: "95%",
    //borderColor: "gray",
    height: 50,
    margin: 10,
    //borderWidth: 1,
    borderRadius: 30,
    color: "#1DCC2E",
  },
  containerr: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    width: '95%',
    height: 50,
    margin: 10,
    paddingLeft: 10,
    borderRadius: 30,
    color: '#1DCC2E',

  },
});
