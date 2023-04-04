import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {useDispatch} from 'react-redux';
import {setLogin} from '../store/ProfileReducer';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);

  const dispatch = useDispatch();

  const userLogin = () => {
    if (email === '' || password === '') {
      Alert.alert('Enter details to signin!');
    } else if (!isTermsAccepted) {
      Alert.alert('Please accept the terms & conditions to continue!');
    } else {
      console.log('Inside userLogin');
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(res => {
          console.log('Inside userLogin2');
          console.log(res);

          console.log('User logged-in successfully!');
          setEmail('');
          setPassword('');
          const currentUser = firebase.auth().currentUser;
          dispatch(
            setLogin({
              userId: currentUser.uid,
              userName: currentUser.displayName,
            }),
          );
          navigation.navigate('Dashboard');
        })
        .catch(error => Alert.alert(error.message));
    }
  };

  useEffect(() => {
    const firebaseConfig = {
      apiKey: 'AIzaSyDF8yyh6pNO7kO6tYgCcFG-KO_ydePupfw',
      authDomain: 'loginapp-575e3.firebaseapp.com',
      projectId: 'loginapp-575e3',
      storageBucket: 'loginapp-575e3.appspot.com',
      messagingSenderId: '395418326598',
      appId: '1:395418326598:web:1f0bc4c333a978b3d59c47',
      measurementId: 'G-RPZ38GCQZ9',
    };
    firebase.initializeApp(firebaseConfig);
    // userLogin();
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputStyle}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.inputStyle}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        maxLength={15}
        secureTextEntry={true}
      />
      <TouchableOpacity
        onPress={() => setIsTermsAccepted(!isTermsAccepted)}
        style={{flexDirection: 'row', alignItems: 'center'}}>
        <View
          style={{
            width: 20,
            height: 20,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: '#ccc',
            marginRight: 10,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: isTermsAccepted ? '#3740FE' : null,
          }}>
          {isTermsAccepted && (
            <Text style={{color: '#fff', fontWeight: 'bold'}}>✓</Text>
          )}
        </View>
        <Text style={{color: '#fff',marginBottom:10}}>
          By logging in, I accept the terms & conditions of the platform
        </Text>
      </TouchableOpacity>
      <Button
        color="#3740FE"
        title="Signin"
        onPress={() => userLogin()}
        disabled={!isTermsAccepted}
      />
      <Text
        style={styles.loginText}
        onPress={() => navigation.navigate('Signup')}>
        Don't have account? Click here to signup
      </Text>
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 35,
    backgroundColor: '#877dfa',
  },
  inputStyle: {
    width: '100%',
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: 'center',
    borderColor: '#ccc',
    borderBottomWidth: 1,
    color: '#ffffff',
  },
  loginText: {
    color: '#ffffff',
    marginTop: 25,
    textAlign: 'center',
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  errorMessage: {
    color: 'red',
    marginTop: 10,
    textAlign: 'center',
  },
});

export default Login;
