import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { Button, Icon } from 'react-native-elements'; // Import Button from react-native-elements
import React, { useState, useEffect } from 'react';
import CheckBox from 'react-native-check-box';
import IonicIcon from 'react-native-vector-icons/Ionicons';

const Login = ({navigation}) => {
    const handleSignup = () => {
        navigation.navigate('Signup'); // Navigates to the Home screen
       };
       const handleForgotPassowrd = () => {
        navigation.navigate('ForgotPassword'); // Navigates to the Home screen
       };
       
   
    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');
    const [isSelected, setSelection] = useState(false);
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        // validateForm();
      }, [email, password]);
    
      const validateForm = () => {
        let errors = {};
    
        if (!email) {
          errors.email = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
          errors.email = 'Email is invalid.';
        }
    
        if (!password) {
          errors.password = 'Password is required.';
        } else if (password.length < 6) {
          errors.password = 'Password must be at least 6 characters.';
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

      const gohome=()=>{
        navigation.navigate('Home');

      }
    
    
  return (
    <View style={styles.container}>
    <Image
      source={require('../assets/logo.png')}
      style={styles.image}
    />
    <Text style={styles.welcomeText}>Welcome Back to Shopuur</Text>
    <Text style={styles.centeredText}>
    Log in to access your account and start saving money 
    </Text>
    <View style={[styles.containerr, { borderColor: email ? '#1DCC2E' : 'gray' }]}>
      <IonicIcon name='mail' size={24} color={email ? '#1DCC2E' : 'gray'} ></IonicIcon>
      <TextInput
        style={styles.input}
         onChangeText={onChangeEmail}
        onBlur={() => handleBlur('email')}
        value={email}
        placeholder="Email Address"
        placeholderTextColor={'gray'}

      />
      </View>
      {touched.email && errors.email && <Text style={styles.error}>{errors.email}</Text>}

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

      <View style={styles.TextinBet}>
        <View style={styles.checkboxRow}>
        <CheckBox
          isChecked={isSelected}
          onClick={() => setSelection(!isSelected)}
          style={styles.checkbox} // Adjust size here
          checkBoxColor='gray'
        />
        <Text style={styles.centereddTextt}>
          Remember me
        </Text>
        </View>
        <TouchableOpacity onPress={handleForgotPassowrd}>        
            <Text style={{ color: '#1DCC2E', }}>forgot Password?{' '}</Text>
            </TouchableOpacity>
            </View>



    <TouchableOpacity activeOpacity={0.7}>
      <Button
        title="Login"
        onPress={gohome}
        iconContainerStyle={{ marginRight: 10 }}
        titleStyle={{ fontWeight: '200', fontSize: 18 }}
        buttonStyle={styles.button}
        containerStyle={styles.buttonContainer}
      />
    </TouchableOpacity>
  <Text style={styles.centeredTextt}>
    Or{' '}
  <Text style={{ color: '#1DCC2E', }}>Login{' '}</Text>
  <Text style={styles.centeredTextt}>
  with
  </Text>
  </Text>
  <View style={styles.container0}>
      <TouchableOpacity activeOpacity={0.7}>
      <IonicIcon name='logo-facebook' size={33} color='blue' ></IonicIcon>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.7}>
      <IonicIcon name='logo-google' size={30} color='yellow' ></IonicIcon>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.7}>
      <IonicIcon name='logo-apple' size={28} color='black' ></IonicIcon>
      </TouchableOpacity>
      </View>    


  <View style={styles.container1}>
  <Text style={styles.centeredTextt}>
    Don't have an account?{' '}
    </Text>
    <TouchableOpacity activeOpacity={0.7} onPress={handleSignup}>
  <Text style={{ color: '#1DCC2E' }}>Signup here</Text>
 </TouchableOpacity>
  </View>

  </View>
  )
}


export default Login

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',   
       marginHorizontal: 10,

    },
    container1: {
      flexDirection: 'row',  
      //: 100, 
      alignItems: 'flex-end',
      marginVertical: 50,  
    },
    container0: {
      flexDirection: 'row',
     // marginBottom: 20,// Arrange items in a row
      //marginVertical: 10,
      //marginVertical: 20,    // Arrange items in a row
      //justifyContent: 'space-between',
     // alignItems: 'stretch',
      //paddingTop:10,
      //paddingHorizontal:20,
      //gap:30,
        justifyContent: 'space-around', // or 'space-evenly' to add equal space around icons
        width: '60%', // Adjust width as necessary
        marginVertical: 10,
  
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
    TextinBet:{
      flexDirection: 'row',
      justifyContent: 'space-between',
    
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
        //height: 35,
      },
      centereddTextt: {
        color: 'Darkgray',
        // justifyContent:"flex-start",
        // textAlign: 'left',
        marginRight:70,
        fontSize: 15,
        
      },
      welcomeText: {
        color: '#1DCC2E',
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
      image: {
        width: 158,
        height: 50,
        marginBottom: 20,
      },
      button: {
        backgroundColor: '#1DCC2E',
        borderColor: 'transparent',
        //borderWidth: 0,
        borderRadius: 30,
        marginVertical: 20,
    
      },
      buttonContainer: {
        width: 200,
        marginHorizontal: 10,
        //marginTop: 10
     },
     input: {
      flex: 1,
      width: '95%',
      //borderColor: 'gray',
      height: 50,
      //margin: 0,
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