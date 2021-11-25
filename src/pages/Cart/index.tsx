import React from 'react';
import { useSelector } from 'react-redux';
import CartItems from '../../components/CartItems';
import { allProductCart } from '../../store/CartProducts/CartProducts.selector';

import {ContainerEmpty, Container, Title, List} from './styles'

const Cart:React.FC = () => {
    const cartProducts = useSelector(allProductCart)
    if(cartProducts.length === 0){
        return(
        <ContainerEmpty>
            <Title>Seu Carrinho está vazio :( </Title>
        </ContainerEmpty> 
        )
    }
    return(
    <Container>
        <Title>Carrinho</Title>
        <List 
        data={cartProducts}
        keyExtractor={(item: any) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <CartItems data={item}/>}
        />
    </Container>
    )
}

export default Cart;