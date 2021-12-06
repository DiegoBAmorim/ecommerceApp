import React from 'react';

import {Container, Avatar, ViewSeparator, Search, Cart} from './styles';

import { Ionicons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons';


const Header: React.FC = () => {
    return(
        <Container>
            <Avatar>
                <Ionicons name="ios-people-outline" size={24} color="black" />
            </Avatar>
            <ViewSeparator>
            <Search>
                <Ionicons name="search" size={24} color="black" />
            </Search>
            <Cart>
                <Feather name="shopping-bag" size={24} color="black" />
            </Cart>
            </ViewSeparator>
        </Container>
    )
}

export default Header;