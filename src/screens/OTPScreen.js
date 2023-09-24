import {
  View,
  Image,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Button from '../components/elements/Button';
import {showToast} from '../components/elements/toast/Toast';

const OTPScreen = ({route}) => {
  const {mobileNo} = route.params;

  const firstInput = useRef();
  const secondInput = useRef();
  const thirdInput = useRef();
  const fourthInput = useRef();
  const [otp, setOtp] = useState({1: '', 2: '', 3: '', 4: ''});

  const pressHandler = () => {
    showToast('Your details has been submitted');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.loginText}>OTP Verify</Text>
        <Image
          source={require('../assets/images/loginPreview.png')}
          style={{width: 250, height: 250, marginTop: 40}}
        />

        <View style={styles.topView}>
          <Text style={styles.centeredText}>OTP Sent to</Text>
          <Text style={styles.countryCodeText}>
            <Text style={styles.phoneNumberText}>
              +91 {mobileNo ? mobileNo : 8976546775}
            </Text>
          </Text>
        </View>

        <View style={styles.otpView}>
          <TextInput
            style={styles.inputView}
            keyboardType="number-pad"
            maxLength={1}
            ref={firstInput}
            onChangeText={text => {
              setOtp({...otp, 1: text});
              text && secondInput.current.focus();
            }}
          />
          <TextInput
            style={styles.inputView}
            keyboardType="number-pad"
            maxLength={1}
            ref={secondInput}
            onChangeText={text => {
              setOtp({...otp, 2: text});
              text ? thirdInput.current.focus() : firstInput.current.focus();
            }}
          />
          <TextInput
            style={styles.inputView}
            keyboardType="number-pad"
            maxLength={1}
            ref={thirdInput}
            onChangeText={text => {
              setOtp({...otp, 3: text});
              text ? fourthInput.current.focus() : secondInput.current.focus();
            }}
          />
          <TextInput
            style={styles.inputView}
            keyboardType="number-pad"
            maxLength={1}
            ref={fourthInput}
            onChangeText={text => {
              setOtp({...otp, 4: text});
              !text && thirdInput.current.focus();
            }}
          />
        </View>

        <Button text="Verify OTP" onPress={pressHandler} />

        <View style={{marginTop: 30}}>
          <Text style={styles.agreementText}>
            By signing up, you agree with our terms and conditions
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
  topView: {
    marginTop: 20,
  },
  phoneNumberText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'gray',
  },
  centeredText: {
    color: '#545252',
    fontSize: 17,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  otpView: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 20,
  },
  inputView: {
    width: 80,
    height: 55,
    borderWidth: 1,
    borderRadius: 15,
    marginLeft: 10,
    padding: 0,
    textAlign: 'center',
    paddingHorizontal: 18,
    paddingVertical: 10,
    backgroundColor: '#F4FAF7',
    color: 'black',
  },
  agreementText: {
    maxWidth: 300,
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
    color: '#C6C6C6',
  },
});

export default OTPScreen;
