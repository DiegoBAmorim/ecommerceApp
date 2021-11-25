import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';

import Cart from '../pages/Cart';
import StackRoutes from './StackRoutes';

import { FontAwesome5 as FontIcon } from '@expo/vector-icons';
import { allProductCart } from '../store/CartProducts/CartProducts.selector';

const Tab = createBottomTabNavigator();
const Routes:React.FC = () => {
    const cartProducts = useSelector(allProductCart)
    
  return(
    <>
     <Tab.Navigator
     screenOptions={{
         headerShown: false,
         tabBarActiveTintColor: '#000',
     }}>
        <Tab.Screen 
        name="Home"
         component={StackRoutes} 
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
              <FontIcon name="shopping-cart" size={size} color={color} />
            ),
            tabBarBadge: cartProducts.length
          }}/> 
    </Tab.Navigator>
    </>
    )
}

export default Routes;