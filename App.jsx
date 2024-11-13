import React from 'react';
import {
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoarding from './src/OnBoarding';
import Signup from './src/Signup';
import PhoneNo from './src/PhoneNo';
import Verified from './src/Verified';
import GetCode from './src/GetCode';
import Login from './src/Login';
import ForgotPassword from './src/ForgotPassword';
import EnterCode from './src/EnterCode';
import ChangePassword from './src/ChangePassword';
import Home from './src/Home';
import Filters from './src/Filters';
import Notification from './src/Notification';
import CreatePost from './src/CreatePost';
import Comments from './src/Comments';
import Followers from './src/Followers';
import Following from './src/Following';

const Stack = createNativeStackNavigator();

function App() {
  console.log("app is running");
  
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#121212' : '#FFFFFF', // Setting a fallback color
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="OnBoarding"  // Change to match the defined screen
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
        <Stack.Screen name ="Signup" component={Signup}/>
        <Stack.Screen name="PhoneNo" component={PhoneNo}/>
        <Stack.Screen name="Verified" component={Verified}/>
        <Stack.Screen name="GetCode" component={GetCode}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="ForgotPassword" component={ForgotPassword}/>
        <Stack.Screen name="EnterCode" component={EnterCode}/>
        <Stack.Screen name="ChangePassword" component={ChangePassword}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Filters" component={Filters}/>
        <Stack.Screen name="Notification" component={Notification}/>
        <Stack.Screen name="CreatePost" component={CreatePost}/>
        <Stack.Screen name="Comments" component={Comments}/>
        <Stack.Screen name="Followers" component={Followers}/>
        <Stack.Screen name="Following" component={Following}/>
      </Stack.Navigator>
      <StatusBar barStyle="light-content" />  // Fixing the StatusBar style
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
