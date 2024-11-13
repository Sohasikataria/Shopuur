import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import React, { useState, useEffect } from 'react';
import IonicIcon from 'react-native-vector-icons/Ionicons';

const Signup = ({ navigation }) => {
  const [text, onChangeText] = useState('');
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const [confirmPassword, onChangeConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const handleLogin = () => {
    navigation.navigate('Login'); // Navigates to the Home screen
  };
  useEffect(() => {
    validateForm();
  }, [text, email, password, confirmPassword]);

  const validateForm = () => {
    let errors = {};

    if (!text) {
      errors.text = 'Name is required.';
    }

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

  const handlePhoneNo = () => {
    // Validate form before proceeding
    if (!isFormValid) {
      console.log('Form has errors. Please correct them.');
      setTouched({ text: true, email: true, password: true, confirmPassword: true });
      return; // Prevent navigation
    }

    // Proceed to navigate to Home if the form is valid
    navigation.navigate('PhoneNo');
    console.log('Form submitted successfully!');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.image} />
      <Text style={styles.welcomeText}>Create a Shopuur Account</Text>
      <Text style={styles.centeredText}>
        Start saving money and sharing deals in your local community
      </Text>
      <View style={[styles.containerr, { borderColor: text ? '#1DCC2E' : 'gray' }]}>
      <IonicIcon name='person' size={24} color={text ? '#1DCC2E' : 'gray'} ></IonicIcon>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        onBlur={() => handleBlur('text')}
        value={text}
        placeholder="Full Name"
        placeholderTextColor={'gray'}

        
        />
      </View>
      {touched.text && errors.text && <Text style={styles.error}>{errors.text}</Text>}

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


      <TouchableOpacity activeOpacity={0.7}>
        <Button
          title="Create Account"
          onPress={handlePhoneNo}
          iconContainerStyle={{ marginRight: 10 }}
          titleStyle={{ fontWeight: '200', fontSize: 18 }}
          buttonStyle={styles.button}
          containerStyle={styles.buttonContainer}
        />
      </TouchableOpacity>

      <View style={styles.container1}>
        <Text style={styles.centeredTextt}>
          Already have an account?{' '}
        </Text>
        <TouchableOpacity activeOpacity={0.7} onPress={handleLogin}>
          <Text style={{ color: '#1DCC2E' }}>
            Login here
          </Text>
        </TouchableOpacity>
      </View>
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

    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //textAlign: 'center',
    marginHorizontal: 10,
    //marginTop: 10
  },
  container1: {
    flexDirection: 'row',
   // marginBottom: 20,// Arrange items in a row
    //marginVertical: 10,
    //marginVertical: 20,    // Arrange items in a row
    //justifyContent: 'flex-end',
    alignItems: 'flex-end',
    //paddingTop:10,
    //paddingHorizontal:20,

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
  welcomeText: {
    color: '#1DCC2E',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 30,
  },
  image: {
    width: 158,
    height: 50,
    marginBottom: 20,
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
    //marginBottom: 10,
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
