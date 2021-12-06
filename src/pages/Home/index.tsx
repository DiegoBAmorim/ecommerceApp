import React, {useState, useEffect} from 'react';

import {TouchableWithoutFeedback, Keyboard} from 'react-native';

import data from '../../utils/products';
import Products from '../../components/Products';
import Banner from '../../components/Banner';

import { AntDesign as FontIcon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Header from '../../components/Header';
import CartHome from '../../components/CartHome';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Container, Search, WrapSearch, BtnSearch, Filter, BannerButton, ListProduct, Title, Highlights, ContainerBannerActions} from './styles';
import { RootStackParamList } from '../../routes/StackRoutes';



type ProfileScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'HomeStack'
>

interface Props{
  navigation: NativeStackNavigationProp<any,any>
}

const Home:React.FC<Props> = ({navigation}) => {
    const [products, setProducts] = useState(data);   
    const [searchText, setSearchText] = useState('');
    
    useEffect(() => {
      if(searchText === ''){
        setProducts(data)
      }else{
        setProducts(
          data.filter(item => {
            if(item.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1){
              return true
            }else{
              return false
            }
          })
        );
      }
    }, [searchText])
    
    const navigateDetailsPage = (item: any) => {
        navigation.navigate('Detail', {data: item});
    }

    const handleOrderClick = () => {
      let newList = [...data];

      newList.sort(( a,b ) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0))
      setProducts(newList)
    }
 
    return(
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header />
        {/* <Header>
        <WrapSearch>
          <Search 
          placeholder="Busque seu produto" 
          onChangeText={(t) => {setSearchText(t)}}/>  
          <BtnSearch>
            <FontIcon name="search1" size={24} color="gray" />
          </BtnSearch>
        </WrapSearch> 
        <Filter onPress={handleOrderClick}>
         <FontIcon name="filter" size={28} color="black" />
        </Filter>
        </Header> */}
       <Banner />
        <Title>Workspaces</Title>
        <ListProduct 
        data={products}
        keyExtractor={(item: any) => String(item.id)} 
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => <Products data={item} navigatePage={() => navigateDetailsPage(item)}/>}
        />
        <Title style={{flex:1}}> New arrivals</Title>
        <CartHome />
    </Container>
    </TouchableWithoutFeedback>
    )
}

export default Home;