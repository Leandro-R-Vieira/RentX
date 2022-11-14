import React from 'react';
import { Button } from '../../components/Button';
import { Accessory } from '../../components/Accessory';
import { useNavigation } from '@react-navigation/native';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

import SpeedSvg from '../../assets/speed.svg';
import AccelerationSvg from '../../assets/acceleration.svg';
import ForceSvg from '../../assets/force.svg';
import GasolineSvg from '../../assets/gasoline.svg';
import ExchangeSvg from '../../assets/exchange.svg';
import PeopleSvg from '../../assets/people.svg';

import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About,
  Accessories,
  Footer,  
} from './styles';

export function CarDetails() {
  const navigation = useNavigation();

  function handleConfirmRental(){
    navigation.navigate('Scheduling');
  }

  function handleBack(){
    navigation.goBack();
  }

  return (
    <Container>
      <Header>
        <BackButton onPress={handleBack} />
      </Header>
      <CarImages>
        <ImageSlider imagesUrl={['https://www.webmotors.com.br/imagens/prod/348415/AUDI_RS5_2.9_V6_TFSI_GASOLINA_SPORTBACK_QUATTRO_STRONIC_34841515342559092.webp?s=fill&w=236&h=135&q=70&t=true']} />
      </CarImages>
      <Content>
        <Details>
          <Description>
            <Brand>Lamborghini</Brand>
            <Name>Aventador</Name>
          </Description>
          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 580</Price>
          </Rent>
        </Details>
        <Accessories>
          <Accessory name="380Km/h" icon={SpeedSvg}/>
          <Accessory name="3.2s" icon={AccelerationSvg}/>
          <Accessory name="800 HP" icon={ForceSvg}/>
          <Accessory name="Gasolina" icon={GasolineSvg}/>
          <Accessory name="Auto" icon={ExchangeSvg}/>
          <Accessory name="2 pessoas" icon={PeopleSvg}/>          
        </Accessories>
        <About>
          Este automóvel desposrtivo, surgiu do lendário
          touro de Lide indultado na praça Real Maestranza de Sevilla.
          É um belíssimo carro pra quem gosta de acelerar.
        </About>
      </Content>
      <Footer>
        <Button title="Escolher Período do aluguel" onPress={handleConfirmRental}/>
      </Footer>
    </Container>
  );
}