import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
background-color: #f2f2f2;
flex: 1;
padding: 4px 0;
`;
export const Header = styled.View`
flex-direction: row;
justify-content: center;
align-items: center;
margin: 0px 40px;
padding-bottom: 20px;

`;

export const WrapSearch = styled.View`
flex-direction: row;
border: 1px solid rgba(0,0,0, 0.2);
border-radius: 7px;
align-items: center;
height: 40px;
width: 100%;
`;

export const BtnSearch = styled.TouchableOpacity`
flex: 1;
`;
export const Search = styled.TextInput`
flex: 9;
padding-left: 10px;
`;

export const Filter = styled.TouchableOpacity`
margin-left: 20px;
`;

export const BannerButton = styled.TouchableOpacity`
border: 1px solid red;
margin-top: 16px;
flex-direction: row;
border-radius: 32px;
margin-left: 24px;
margin-right: 24px;
height: 192px;
`;

export const ContainerBannerActions = styled.View`
width: 175px;
height: 144px;
`;

export const Banner = styled.Image`
height: 246px;
width: 129px;
border-radius: 6px;
`;
export const ListProduct = styled.FlatList`
margin-left: 24px;

height: 176px;
`;

export const Title = styled.Text`
font-weight: bold;
margin-left: 24px;
margin-right: 24px;

`;

export const Highlights = styled.View`
height: 246px;
width: 366px;
`;