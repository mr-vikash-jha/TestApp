import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {useDispatch, useSelector} from 'react-redux';
import {setLogout} from '../store/ProfileReducer';

const firebaseConfig = {
  apiKey: "AIzaSyDF8yyh6pNO7kO6tYgCcFG-KO_ydePupfw",
  authDomain: "loginapp-575e3.firebaseapp.com",
  projectId: "loginapp-575e3",
  storageBucket: "loginapp-575e3.appspot.com",
  messagingSenderId: "395418326598",
  appId: "1:395418326598:web:1f0bc4c333a978b3d59c47",
  measurementId: "G-RPZ38GCQZ9"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function Dashboard({navigation}) {
  const profile = useSelector(state => state.profile);
  const dispatch = useDispatch();

  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch(setLogout());
        navigation.navigate('Login');
      })
      .catch(error => console.log(error));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Hello, {profile.userName}</Text>
      <Text style={styles.textStyle}>Your UserID: {profile.userId}</Text>
      <Button color="#3740FE" title="Logout" onPress={() => signOut()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 35,
    backgroundColor: '#877dfa',
  },
  textStyle: {
    fontSize: 15,
    marginBottom: 20,
    color: '#ffffff',
  },
});
