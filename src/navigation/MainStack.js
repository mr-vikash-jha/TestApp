import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import Dashboard from '../screens/Dashboard';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const CustomDrawerContent = ({title, navigation}) => {
  const {width} = Dimensions.get('window');
  const isSmallDevice = width < 375;
  return (
    <DrawerContentScrollView drawerContentContainerStyle ={{
      display: 'flex',
      justifyContent: 'space-between',
      height: '100%',
    }}>
      
        <DrawerItem
          label="Dashboard"
          onPress={() => navigation.navigate('Dashboard')}
        />
        <View
          style={[
            styles.headerContainer,
            {paddingVertical: isSmallDevice ? 10 : 20},
          ]}>
          <Text style={styles.versionText}>Version 1.0.0</Text>
        </View>
      
    </DrawerContentScrollView>
  );
};

const MainStack = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Dashboard"
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Dashboard" component={Dashboard} />
    </Drawer.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#3740FE',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Main"
        component={MainStack}
        options={({route, navigation}) => ({})}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#3740FE',
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  versionText: {
    fontSize: 12,
    color: '#fff',
  },
  drawerButton: {
    position: 'absolute',
    left: 20,
    top: 0,
    bottom: 0,
  },
});

export default AppNavigator;
