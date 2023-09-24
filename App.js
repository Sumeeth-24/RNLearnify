import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from './src/screens/LoginScreen';
import OTPScreen from './src/screens/OTPScreen';
import Toast_ from './src/components/elements/toast';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="loginScreen" component={LoginScreen} />
        <Stack.Screen name="otpScreen" component={OTPScreen} />
      </Stack.Navigator>
      <Toast_ />
    </NavigationContainer>
  );
};

export default App;
