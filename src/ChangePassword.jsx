import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { Button, Icon } from 'react-native-elements'; // Import Button from react-native-elements
import React, { useState, useEffect } from 'react';
import IonicIcon from 'react-native-vector-icons/Ionicons';


const ChangePassword =({navigation}) => {

    const [password, onChangePassword] = useState('');
    const [confirmPassword, onChangeConfirmPassword] = useState('');
    const [isSelected, setSelection] = useState(false);
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        validateForm();
      }, [ password, confirmPassword]);
    
      const validateForm = () => {
        let errors = {};
    
    
        if (!password) {
          errors.password = 'Password is required.';
        } else if (password.length < 6) {
          errors.password = 'Password must be at least 6 characters.';
        }
        if (!confirmPassword) {
            errors.confirmPassword = 'Please confirm your password.';
          } else if (confirmPassword !== password) {
            errors.confirmPassword = 'Passwords do not match.';
          }
      
    
        setErrors(errors);
        setIsFormValid(Object.keys(errors).length === 0);
      };
    
      const handleBlur = (field) => {
        setTouched({ ...touched, [field]: true });
      };
    
      const handleHome = () => {
        // Validate form before proceeding
        if (!isFormValid) {
          console.log('Form has errors. Please correct them.');
          setTouched({ text: true, email: true, password: true, confirmPassword: true });
          return; // Prevent navigation
        }
    
        // Proceed to navigate to Home if the form is valid
        navigation.navigate('Home');
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
     <Text style={styles.welcomeText}>Reset your Password</Text>
     <View style={[styles.containerr, { borderColor: password ? '#1DCC2E' : 'gray' }]}>
      <IonicIcon name='lock-closed' size={24} color={password ? '#1DCC2E' : 'gray'} ></IonicIcon>
      <TextInput
        style={styles.input}
         onChangeText={onChangePassword}
        onBlur={() => handleBlur('password')}
        value={password}
        placeholder="Password"
        placeholderTextColor={'gray'}
        secureTextEntry
      />
       <IonicIcon
    name="eye-off-outline"
    size={24}
    color={'gray'}
  />
      </View>
      {touched.password && errors.password && <Text style={styles.error}>{errors.password}</Text>}

      <View style={[styles.containerr, { borderColor: confirmPassword ? '#1DCC2E' : 'gray' }]}>
  <IonicIcon
    name="lock-closed"
    size={24}
    color={confirmPassword ? '#1DCC2E' : 'gray'}
  />
  <TextInput
    style={styles.input}
    onChangeText={onChangeConfirmPassword}
    onBlur={() => handleBlur('confirmPassword')}
    value={confirmPassword}
    placeholder="Confirm Password"
    placeholderTextColor={'gray'}
    secureTextEntry
  />
   <IonicIcon
    name="eye-off-outline"
    size={24}
    color={'gray'}
  />
</View>

      {touched.confirmPassword && errors.confirmPassword && <Text style={styles.error}>{errors.confirmPassword}</Text>}

     
      <Button
        title="Reset"
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
export default ChangePassword

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
        marginHorizontal: 10,
        //marginTop: 50
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