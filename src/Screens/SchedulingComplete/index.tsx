import React from 'react';
import DoneSvg from '../../assets/done.svg';
import LogoSvg from '../../assets/logo_background_gray.svg';

import { StatusBar, useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ConfirmButton } from '../../components/ConfirmButton';
import { 
  Container,
  Content,
  Title,
  Message,
  Footer,
} from './styles';

export function SchedulingComplete() {
  const { width } = useWindowDimensions();

  const navigation = useNavigation();

  function handleConfirmRental() {
    navigation.navigate('Home')
  }

  return (
    <Container> 
      <StatusBar 
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />    
      <LogoSvg width={width}/>
      <Content>
        <DoneSvg width={80} height={80}/>
        <Title>Carro Alugado!</Title>
        <Message>
          Agora você só precisa ir {'\n'}
          até a concessionária da RENTX {'\n'}
          pegar o seu automóvel.
        </Message>
      </Content>
      
      <Footer>
        <ConfirmButton title='OK' onPress={handleConfirmRental}/>
      </Footer>

    </Container>
  );
}