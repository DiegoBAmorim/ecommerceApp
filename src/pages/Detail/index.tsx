import React from 'react';

import {useNavigation, useRoute} from '@react-navigation/native';
import {Feather, Ionicons, FontAwesome5} from '@expo/vector-icons';

import {Container, Header, HeaderButton, Banner, ProductName, ProductPrice, Title, Description, ScrollList, Main, CartBtn, AddCarTxt, ProductView} from './styles';

const Detail: React.FC= () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { name, price, description, image}: any = route.params;
    
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
        resizeMethod="resize"
        source={require('../../assets/fifa-18.png')}
        />
        <Main>
         <ProductView>
           <ProductName>{name}</ProductName>
           <ProductPrice>R$ {JSON.stringify(price)}</ProductPrice>
         </ProductView>
         <CartBtn>
           <FontAwesome5 name="shopping-cart" size={26} color={'#000'} />
           <AddCarTxt>Adicionar ao Carrinho</AddCarTxt>
         </CartBtn>
        </Main>
        <ScrollList showsVerticalScrollIndicator={false}>
            <Title>Descrição</Title>
            <Description>
                {description}
            </Description>
        </ScrollList>
        
        </Container>
        </>
    )
}

export default Detail;