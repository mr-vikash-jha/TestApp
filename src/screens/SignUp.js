import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
} from "react-native";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const Signup = ({ navigation }) => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
  };
  

  const updateInputVal = (val, prop) => {
    if (prop === "displayName") {
      setDisplayName(val);
    } else if (prop === "email") {
      setEmail(val);
    } else if (prop === "password") {
      setPassword(val);
    }
  };

  const registerUser = () => {
    if (displayName === "" || email === "" || password === "") {
      Alert.alert("Enter all details to signup!");
    } else if (!validateEmail(email)) {
      Alert.alert("Please enter a valid email address!");
    } else if (!validatePassword(password)) {
      Alert.alert(
        "Password should be at least 8 characters long and contain at least 1 uppercase letter and 1 number!"
      );
    } else {
      setIsLoading(true);
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((res) => {
          console.log("Inside registerUser 2");
          console.log("This is res", res);
          console.log("This is res.user", res.user);
          res.user.updateProfile({
            displayName: displayName,
          });
          console.log("User registered successfully!");
          setDisplayName("");
          setEmail("");
          setPassword("");
          setIsLoading(false);
          navigation.navigate("Login");
        })
        .catch((error) => console.log(error.message));
    }
  };

  useEffect(() => {
    const firebaseConfig = {
      apiKey: "AIzaSyDF8yyh6pNO7kO6tYgCcFG-KO_ydePupfw",
      authDomain: "loginapp-575e3.firebaseapp.com",
      projectId: "loginapp-575e3",
      storageBucket: "loginapp-575e3.appspot.com",
      messagingSenderId: "395418326598",
      appId: "1:395418326598:web:1f0bc4c333a978b3d59c47",
      measurementId: "G-RPZ38GCQZ9",
    };
    firebase.initializeApp(firebaseConfig);
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputStyle}
        placeholder="Name"
        value={displayName}
        onChangeText={(val) => updateInputVal(val, "displayName")}
      />
      <TextInput
        style={styles.inputStyle}
        placeholder="Email"
        value={email}
        onChangeText={(val) => updateInputVal(val, "email")}
      />
      <TextInput
        style={styles.inputStyle}
        placeholder="Password"
        value={password}
        onChangeText={(val) => updateInputVal(val, "password")}
        maxLength={15}
        secureTextEntry={true}
      />
      <Button color="#3740FE" title="Signup" onPress={() => registerUser()} />
      <Text
        style={styles.loginText}
        onPress={() => navigation.navigate("Login")}
      >
        Already Registered? Click here to login
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 35,
    backgroundColor: "#877dfa",
  },
  inputStyle: {
    width: "100%",
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: "center",
    borderColor: "#ccc",
    borderBottomWidth: 1,
    color: "#ffffff",
  },
  loginText: {
    color: "#ffffff",
    marginTop: 25,
    textAlign: "center",
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});

export default Signup;