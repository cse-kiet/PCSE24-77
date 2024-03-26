import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {StatusBar} from 'react-native';
import HomeScreen from './screens/Homescreen';
import WeatherApp from './screens/WeatherApp';
import RainAlert from './screens/RainAlert';
import Structure from './screens/Structure';
import News from './screens/News';
import LoginScreen from './screens/LoginScreen';
import WaitingScreen from './screens/WaitingScreen';
import AfterLogin from './screens/AfterLogin';
import Disease from './screens/Disease';
import Schemes from './screens/Schemes';
import Resource from './screens/Resource';
import Emi from './screens/Emi';
import OptionsMenu from './screens/OptionsMenu';
import Chat from './screens/Chat';
import Register from './screens/Register';
import Profile from './screens/Profile';
import Suggestion from './screens/Suggestion';

const Stack = createNativeStackNavigator();

const App = () => {
 
  const screenOptions = ({ navigation }) => ({
    headerStyle: {
      backgroundColor: '#95F995',
    },
    headerTitleAlign: 'center',
    headerRight: () => <OptionsMenu navigation={navigation} />,
  });

  return (
    <NavigationContainer>
      <StatusBar
        animated={true}
        backgroundColor="black"
    />
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen options={{ headerShown: false }} name="WaitingScreen" component={WaitingScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Welcome" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen options={{ headerShown: false }} name="WeatherApp" component={WeatherApp} />
        <Stack.Screen options={{ headerShown: false }} name="RainAlert" component={RainAlert} />
        <Stack.Screen options={{ headerShown: false }} name="News" component={News} />
        <Stack.Screen options={{ headerShown: false }} name="Structure" component={Structure} />
        <Stack.Screen options={{ headerShown: false }} name="AfterLogin" component={AfterLogin}/>
        <Stack.Screen options={{ headerShown: false }} name="Disease" component={Disease}/>
        <Stack.Screen options={{ headerShown: false }} name="Schemes" component={Schemes}/>
        <Stack.Screen options={{ headerShown: false }} name="Resource" component={Resource}/>
        <Stack.Screen options={{ headerShown: false }} name="Emi" component={Emi}/>
        <Stack.Screen options={{ headerShown: false }} name="Register" component={Register}/>
        <Stack.Screen options={{ headerShown: false }} name="Suggestion" component={Suggestion}/>
        <Stack.Screen name="Profile" component={Profile}/>

        <Stack.Screen name="Chat" component={Chat}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;