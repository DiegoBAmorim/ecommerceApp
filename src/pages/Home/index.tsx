import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import { Container, Search, WrapSearch, BtnSearch, Filter, Header, BannerButton, Banner} from './styles'
import { AntDesign as FontIcon } from '@expo/vector-icons';
const Home:React.FC = () => {
    return(
    <Container>
        <Header>
        <WrapSearch>
          <Search placeholder="Busque seu produto"/>  
          <BtnSearch>
            <FontIcon name="search1" size={24} color="gray" />
          </BtnSearch>
        </WrapSearch> 
        <Filter>
         <FontIcon name="filter" size={28} color="black" />
        </Filter>
        </Header>
        <BannerButton activeOpacity={0.9} >
            <Banner 
            resizeMode="contain"
            source={require('../../assets/fifa-18.png')}
            />
        </BannerButton>
    </Container>
    )
}

export default Home;