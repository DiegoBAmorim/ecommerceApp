import styled from 'styled-components/native';

import metrics from '../../styles/metrics';

export const Container = styled.SafeAreaView`
margin: 0 14px;
`;

export const Header = styled.View`
z-index: 99;
position: absolute;
top: 40px;
width: 100%;
display: flex;
flex-direction: row;
justify-content: flex-start;
padding: 0 14px;
`;

export const HeaderButton = styled.TouchableOpacity`
width: 46px;
height: 46px;
background-color:rgba(0, 0, 0, 0.5);
border-radius: 23px;
justify-content: center;
align-items: center;
`;

export const Banner = styled.Image`
width: 100%;
height: 450px;
border-bottom-left-radius: 20px;
border-bottom-right-radius: 20px;
margin-bottom: 20px;

`;

export const Main = styled.View`
flex-direction: row;
width: 100%;
`;
export const ProductView = styled.View`
flex-direction: column;
flex: 3;
`;
export const ProductName = styled.Text`
font-size: 18px;
font-weight: bold;
`;
export const ProductPrice = styled.Text`
`;

export const CartBtn = styled.TouchableOpacity`
justify-content: flex-end;
align-items: center;
flex: 1;
`;

export const AddCarTxt = styled.Text`
text-align: center;

`;

export const ScrollList = styled.ScrollView`

`;

export const Title = styled.Text`
color: #000;
margin-bottom: 10px;
font-size: 22px;
font-weight: bold;
padding: 8px 0px;
margin-top: 8px;
`;

export const Description = styled.Text`
padding-bottom: 30px;
color: #000;
line-height: 20px;
text-align: justify;

`;