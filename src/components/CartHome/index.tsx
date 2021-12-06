import React from 'react';  

import { AntDesign } from '@expo/vector-icons'; 

import {Container} from './styles'

export const CartHome: React.FC = () => {
    return(
        <Container activeOpacity={1}>
            <AntDesign name="shoppingcart" size={24} color="white" />
        </Container>
    )
}

export default CartHome;