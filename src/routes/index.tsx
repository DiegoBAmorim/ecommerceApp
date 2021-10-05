import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/Home';
import Cart from '../pages/Cart';
import { FontAwesome5 as FontIcon } from '@expo/vector-icons';

import CartIcon from '../assets/cartIcon.svg'


const Routes:React.FC = () => {
    const Tab = createBottomTabNavigator();

    return(
    <>
     <Tab.Navigator
     screenOptions={{
         headerShown: false
     }}>
        <Tab.Screen 
        name="Home"
         component={Home} 
         options={{
            tabBarIcon: ({ color, size }) => (
                <FontIcon name="home" color={color} size={size} />
            ),
          }}/>

        <Tab.Screen
         name="Carrinho" 
         component={Cart}
         options={{
          
            tabBarIcon: ({ color, size }) => (
              <CartIcon height={size} width={size} fill={color} />
            ),

          }}/> 
    </Tab.Navigator>
    </>
    )
}

export default Routes;