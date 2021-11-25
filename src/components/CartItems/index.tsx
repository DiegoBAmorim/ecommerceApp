import React from 'react';
import {Container, DetailsContainer,ProductName, ProductPrice, ProductScore, ImageContainer,ProductImage} from './styles';

interface Props{
    data: {
        id: number,
        image: number,
        name: string,
        price: number,
        score: number
    }
}

const CartItems:React.FC<Props> = ({data}) => {
    console.log(data)
    return(
    <Container activeOpacity={1}>
        <ImageContainer>
         <ProductImage 
          resizeMode="contain"
          source={data.image}
        />
        </ImageContainer>
        <DetailsContainer>
        <ProductName>{data.name}</ProductName>
        <ProductPrice>R$ {data.price.toString()}</ProductPrice>
        </DetailsContainer>
    </Container>
    )
}

export default CartItems;