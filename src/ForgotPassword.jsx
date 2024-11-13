import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { Button, Icon } from 'react-native-elements'; // Import Button from react-native-elements
import React, { useState, useEffect } from 'react';
import IonicIcon from 'react-native-vector-icons/Ionicons';


const ForgotPassword = ({navigation}) => {
 
    const [email, onChangeEmail] = React.useState('');
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);
    useEffect(() => {
        validateForm();
      }, [ email]);
    
      const validateForm = () => {
        let errors = {};
    
    
        if (!email) {
            errors.email = 'Email is required.';
          } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Email is invalid.';
          }
      
    
        setErrors(errors);
        setIsFormValid(Object.keys(errors).length === 0);
      };
    
      const handleBlur = (field) => {
        setTouched({ ...touched, [field]: true });
      };
    
      const handleEnterCode = () => {
        // Validate form before proceeding
        if (!isFormValid) {
          console.log('Form has errors. Please correct email.');
          setTouched({email: true});
          return; // Prevent navigation
        }
    
        // Proceed to navigate to Home if the form is valid
        navigation.navigate('EnterCode');
        console.log('Form submitted successfully!');
      };
   
  return (
    <View style={styles.mainContainer}>
    <View style={styles.container1}>
       <TouchableOpacity activeOpacity={0.7} style={styles.backButton}>
         <IonicIcon name='chevron-back-outline' size={24} color='gray' ></IonicIcon>
         </TouchableOpacity>
     </View>
<View style={styles.container}>
    <Text style={styles.welcomeText}>Forgot Password?</Text>
    <Text style={styles.centeredText}>
    Don't worry we got you covered. Enter the email address or phone number associated with this account. 
    </Text>
    <View style={[styles.containerr, { borderColor: email ? '#1DCC2E' : 'gray' }]}>
      <IonicIcon name='mail' size={24} color={email ? '#1DCC2E' : 'gray'} ></IonicIcon>
      <TextInput
        style={styles.input}
         onChangeText={onChangeEmail}
        onBlur={() => handleBlur('email')}
        value={email}
        placeholder="Email Address"
        placeholderTextColor={"gray"}
      />
      </View>
      {touched.email && errors.email && <Text style={styles.error}>{errors.email}</Text>}

        
      <Button
  title="Send Code"
  onPress={handleEnterCode}
  iconContainerStyle={{ marginRight: 10 }}
  titleStyle={{ fontWeight: '200', fontSize: 18 }}
  buttonStyle={[
    styles.button,
    { backgroundColor: isFormValid ? '#1DCC2E' : 'gray' }, // Set color based on form validity
  ]}
  containerStyle={styles.buttonContainer}
  disabled={!isFormValid} // Disable button if form is invalid
/>

</View>
    </View>
  );
}

export default ForgotPassword

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
      flex: 1,
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
        marginTop:10,
        fontSize: 16,
      },
      centeredTextt: {
        color: 'gray',
        textAlign: 'center',
        fontSize: 16,
      },
      welcomeText: {
        color: '#1DCC2E',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 30,
        
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
     input: {
      flex: 1,
      width: '95%',
      //borderColor: 'gray',
      height: 50,
      margin: 10,
     // borderWidth: 1,
      paddingLeft: 10,
      borderRadius: 10,
      color: '#1DCC2E',
    },
      error: {
        color: 'red',
        fontSize: 14,
        marginBottom: 8,
        alignSelf: 'flex-start',
        marginLeft: 20,
      },
    });    