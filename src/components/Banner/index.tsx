import React from 'react';

import {View} from 'react-native'

import { FontAwesome5 } from '@expo/vector-icons'; 

import { Title, Highlights, BannerButton, ContainerBannerActions, BannerImg, TxtContainer, TextBannerMain, SubtitleBannerMain, BtnBannerMain, BtnText, BtnCart, RowBtn} from './styles';

const Banner: React.FC = () => {
    return (
        <Highlights>
        <Title>Popular Now</Title>
        <BannerButton activeOpacity={0.9} >
          <ContainerBannerActions>
            <TxtContainer>
              <TextBannerMain>Adjustable Office Chair</TextBannerMain>
              <SubtitleBannerMain>Hughlan Workspace</SubtitleBannerMain>
            </TxtContainer>
            <RowBtn>
            <BtnBannerMain>
              <BtnText>View Item</BtnText>
            </BtnBannerMain>
            <BtnCart>
              <FontAwesome5 name="shopping-bag" size={24} color="white" />
            </BtnCart>
            </RowBtn>
          </ContainerBannerActions>
          <BannerImg
            source={require('../../assets/image7.png')}
          />
        </BannerButton>
        </Highlights>
    )
}

export default Banner