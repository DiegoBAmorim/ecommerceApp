import React from 'react';
import { Alert } from 'react-native';
import {Container, Title, Img} from './styles';

interface Props {
    data: any;
    navigatePage: (data: object) => void;
}

const Products: React.FC<Props> = ({data, navigatePage}) => {
    
    return (
        <Container onPress={() => navigatePage(data)}>
            <Img source={data.image} />
            <Title>{data.name}</Title>
        </Container>
    )
}

export default Products;