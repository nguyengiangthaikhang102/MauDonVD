// In App.js in a new project

import * as React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import dsMauDon from './src/screen/dsMaudon';
import DonTamHoanNVQS from './src/screen/donTamHoanNVQS';
import DkThanhCong from './src/screen/dkThanhCong';
import DonCamKetTraNoHP from './src/screen/doncamkettranohocphi';
import DonXinVayVonNHCS from './src/screen/donxinvayvonnganhangchinhsach';
import DonXacNhanNoMon from './src/screen/donxacnhannomon';
import DonXinCapBuHocPhi from './src/screen/donxincapbuhocphi';
import GiayXacNhanMienGiamHPNDH from './src/screen/giayxacnhanmiengiamhocphiNDH';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: '#F47828'},
          headerTintColor: 'white',
          headerTitleStyle: {
            width: 50,
          },
        }}>
        <Stack.Screen name="Mẫu đơn" component={dsMauDon} />
        <Stack.Screen
          name="Don 1"
          component={DonTamHoanNVQS}
          options={({route}) => ({title: route.params.name})}
        />
        <Stack.Screen
          name="Don 6"
          component={DonXacNhanNoMon}
          options={({route}) => ({title: route.params.name})}
        />
        <Stack.Screen
          name="Don 7"
          component={DonXinVayVonNHCS}
          options={({route}) => ({title: route.params.name})}
        />
        <Stack.Screen
          name="Don 8"
          component={DonCamKetTraNoHP}
          options={({route}) => ({title: route.params.name})}
        />
        
         <Stack.Screen
          name="Don 9"
          component={DonXinCapBuHocPhi}
          options={({route}) => ({title: route.params.name})}
        />
        <Stack.Screen
          name="Don 10"
          component={GiayXacNhanMienGiamHPNDH}
          options={({route}) => ({title: route.params.name})}
        />
        <Stack.Screen name="Dk thanh cong" component={DkThanhCong} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  HomeScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

