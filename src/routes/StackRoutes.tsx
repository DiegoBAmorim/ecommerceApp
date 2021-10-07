import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Home from '../pages/Home';
import Detail from '../pages/Detail';

export type RootStackParamList = {
    Detail: undefined;
    HomeStack: undefined;
  };

  type Params = { name: string, price: number, description: string}

const Stack = createNativeStackNavigator<RootStackParamList>();

const Routes:React.FC = () => {
    return(
    <>
     <Stack.Navigator initialRouteName="HomeStack">
        <Stack.Screen 
        name="HomeStack" 
        component={Home}
        options={{
            headerShown: false,
        }} />
        <Stack.Screen 
        name="Detail" 
        component={Detail}
        options={{
            headerShown: false,
            //headerBackTitle: "Voltar",
            //title: "Produto"
        }} />
    </Stack.Navigator>
    </>
    )
}

export default Routes;