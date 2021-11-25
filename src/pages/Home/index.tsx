import React, {useState, useEffect} from 'react';

import {TouchableWithoutFeedback, Keyboard} from 'react-native';

import data from '../../utils/products';
import Products from '../../components/Products';

import { AntDesign as FontIcon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Container, Search, WrapSearch, BtnSearch, Filter, Header, BannerButton, Banner, ListProduct} from './styles';
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
        <Header>
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
        </Header>
        
        {/* <BannerButton activeOpacity={0.9} >
            <Banner 
            resizeMode="contain"
            source={require('../../assets/fifa-18.png')}
            />
        </BannerButton> */}
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