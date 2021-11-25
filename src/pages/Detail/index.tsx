import React from 'react';

import {useNavigation, useRoute} from '@react-navigation/native';
import {Feather, Ionicons, FontAwesome5} from '@expo/vector-icons';

import { useSelector, useDispatch } from 'react-redux';

import {Container, Header, HeaderButton, Banner, ProductName, ProductPrice, Title, Description, ScrollList, Main, CartBtn, AddCarTxt, ProductView} from './styles';
import { allProductCart } from '../../store/CartProducts/CartProducts.selector';
import { setCartProduct } from '../../store/CartProducts/CartProducts.actions';

const Detail: React.FC= () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const cart = useSelector(allProductCart)
    const route = useRoute();
    console.log( cart)
    const { data }: any = route.params;
   
    return(
        <>
        <Container>
         <Header>
           <HeaderButton activeOpacity={0.7} onPress={() => navigation.goBack()}>
            <Feather 
                name="arrow-left" 
                size={28}
                color="#FFF"
            />
           </HeaderButton>
         </Header>
         <Banner 
        resizeMode="contain"
        source={data.image}
        />
        <Main>
         <ProductView>
           <ProductName>{data.name}</ProductName>
           <ProductPrice>R$ {JSON.stringify(data.price)}</ProductPrice>
         </ProductView>
         <CartBtn onPress={() => dispatch(setCartProduct(data))}>
           <FontAwesome5 name="shopping-cart" size={26} color={'#000'} />
           <AddCarTxt>Adicionar ao Carrinho</AddCarTxt>
         </CartBtn>
        </Main>
        <Title>Descrição</Title>
        <ScrollList showsVerticalScrollIndicator={false}>
            <Description>
                {data.description}
            </Description>
        </ScrollList>
        
        </Container>
        </>
    )
}

export default Detail;