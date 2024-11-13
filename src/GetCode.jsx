import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import { Button } from 'react-native-elements'; // Import Button from react-native-elements
import React from 'react';
import IonicIcon from 'react-native-vector-icons/Ionicons';


const GetCode = ({ navigation }) => {
  const [code, setCode] = React.useState(['', '', '', '']); // Array to hold 4-digit code

  // Function to handle text change for each input
  const handleTextChange = (text, index) => {
    let newCode = [...code];
    newCode[index] = text;
    setCode(newCode);
  };

  const handleVerified = () => {
    if (code.join('').length === 4) {
      navigation.navigate('Verified'); // Navigates to the Verified screen
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
      <Text style={styles.welcomeText}>Verify Phone Number</Text>
      <Text style={styles.centeredText}>
        We have sent a code to your Phone Number
      </Text>

      <View style={styles.inputRow}>
        {code.map((digit, index) => (
          <TextInput
            key={index}
            style={[styles.input, { borderColor: digit ? '#1DCC2E' : 'gray' }]} 
            onChangeText={(text) => handleTextChange(text, index)}
            value={digit}
            maxLength={1}
            keyboardType="numeric" // Use numeric keyboard for each input
          />
        ))}
      </View>

      <Button
        title="Verify"
        onPress={handleVerified}
        iconContainerStyle={{ marginRight: 10 }}
        titleStyle={{ fontWeight: '200', fontSize: 20 }}
        buttonStyle={[
          styles.button,
          { backgroundColor: code.join('').length === 4 ? '#1DCC2E' : 'gray' },
        ]}
        containerStyle={styles.buttonContainer}
        disabled={code.join('').length !== 4} // Disable button if code is not complete
      />
        <TouchableOpacity>
  <Text style={styles.centeredTextt}>
    Resend
  </Text>
</TouchableOpacity>
</View>
    </View>
  );
}
export default GetCode;

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
    marginHorizontal:30,
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
  welcomeText: {
    color: '#4A4A4A',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 30,
    //marginBottom: 10,
  },
  centeredText: {
    color: 'gray',
    textAlign: 'center',
    marginTop: 10,
    fontSize: 16,
  },
  centeredTextt: {
    color: 'gray',
    textAlign: 'center',
    fontSize: 16,
  },
  inputRow: {
    flexDirection: 'row',
    marginTop: 50,
  },
  input: {
    width: 40,
    height: 50,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 18,
    color: '#1DCC2E',
  },
  button: {
    borderWidth: 0,
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
