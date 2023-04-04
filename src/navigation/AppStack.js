import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import MainStack from './MainStack';
import AuthStack from './AuthStack';

const AppStack = () => {
  const profile = useSelector(state => state.profile);

  return <>{profile.isLogin ? <MainStack /> : <AuthStack />}</>;
};

export default AppStack;

const styles = StyleSheet.create({});
