import {
  View,
  Image,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../components/elements/Button';

const LoginScreen = ({navigation}) => {
  const [number, setNumber] = useState({
    phonenumber: '',
  });

  const handleNumberInput = (key, value) => {
    setNumber({
      ...number,
      [key]: value,
    });
  };

  const pressHandler = () => {
    navigation.navigate('otpScreen', {
      mobileNo: number?.phonenumber,
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.loginText}>Log in</Text>
        <Image
          source={require('../assets/images/loginPreview.png')}
          style={{width: 250, height: 250, marginTop: 40}}
        />

        <View style={styles.whiteContainer}>
          <View style={styles.countryCodeView}>
            <Text style={styles.countrycodeText}>+91</Text>
            <Icon name={'caret-down-outline'} style={styles.downArrow} />
          </View>

          <View style={styles.inputView}>
            <TextInput
              placeholder="Phone Number"
              keyboardType="number-pad"
              placeholderTextColor={'gray'}
              style={styles.textInput}
              maxLength={11}
              type="number"
              value={number.phonenumber}
              onChangeText={value => {
                handleNumberInput('phonenumber', value);
              }}
            />
          </View>
        </View>

        <Button text="Get OTP" onPress={pressHandler} />

        <View style={{marginTop: 30}}>
          <Text style={styles.agreementText}>
            By signing up, you agree with our Terms and conditions
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    keyboardShouldPersistTaps: 'always',
  },
  innerContainer: {
    alignItems: 'center',
    marginTop: 60,
  },
  loginText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  whiteContainer: {
    flexDirection: 'row',
    width: 350,
    height: 50,
    backgroundColor: '#F4FAF7',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 50,
    marginTop: 80,
    paddingHorizontal: 10,
  },
  inputView: {
    flex: 6,
  },
  countryCodeView: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 2,
    paddingLeft: 20,
  },
  countrycodeText: {
    fontSize: 18,
    marginRight: 5,
    color: 'gray',
  },
  downArrow: {
    fontSize: 18,
    marginHorizontal: 6,
    color: '#545252',
  },
  agreementText: {
    maxWidth: 300,
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
    color: '#C6C6C6',
  },
  textInput: {
    fontSize: 16,
    color: 'black',
    padding: 5,
  },
});

export default LoginScreen;
