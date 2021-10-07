import React, {useState, useEffect} from 'react';

import {TouchableWithoutFeedback, Keyboard} from 'react-native';

import data from '../../utils/products.json';
import Products from '../../components/Products';

import { AntDesign as FontIcon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Container, Search, WrapSearch, BtnSearch, Filter, Header, BannerButton, Banner, ListProduct} from './styles';
import { RootStackParamList } from '../../routes/StackRoutes';
import { randomBanner } from '../../utils/product';

type ProfileScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'HomeStack'
>

const Home:React.FC = () => {
    const [products, setProducts] = useState(data);   
    const navigation = useNavigation<ProfileScreenNavigationProp>();
    
    const navigateDetailsPage = (item: any) => {
        navigation.navigate('Detail', {
         name: item.name,
         price: item.price,
         description: item.description,
         image: item.image
        } );
    }
 
    return(
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
        <ListProduct 
        data={products}
        keyExtractor={(item: any) => String(item.id)}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <Products data={item} navigatePage={() => navigateDetailsPage(item)}/>}
        />
    </Container>
    </TouchableWithoutFeedback>
    )
}

export default Home;