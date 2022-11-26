import React from 'react';
import { CarDTO } from '../../dtos/CarDTO';
import { Button } from '../../components/Button';
import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';
import { useNavigation, useRoute } from '@react-navigation/native';

import Animated, {
  Extrapolate,
  interpolate,
  useSharedValue, 
  useAnimatedStyle,
  useAnimatedScrollHandler,
} from 'react-native-reanimated';

import {
  Rent,
  Name,
  Price,
  Brand,
  About,
  Period,
  Header,
  Footer,
  Details,
  Container,
  CarImages,
  Accessories,
  Description,
} from './styles';
import { StatusBar } from 'react-native';

interface Params {
  car: CarDTO;
}

export function CarDetails() {
  const navigation = useNavigation();
  const route = useRoute();
  const { car } = route.params as Params;

  const scrollY = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler(e => {
    scrollY.value = e.contentOffset.y;
    console.log(e.contentOffset.y)
  });

  const headerStyleAnimation = useAnimatedStyle(() => {
    return {
      height: interpolate(
        scrollY.value,
        [0, 200],
        [200, 70],
        Extrapolate.CLAMP
      ),
    }
  });

  function handleConfirmRental() {
    navigation.navigate('Scheduling', { car });
  }

  function handleBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        translucent={false}
        backgroundColor="transparent"
      />

      <Animated.View 
        style={[headerStyleAnimation]}
      >
      <Header>
        <BackButton onPress={handleBack} />
      </Header>
      <CarImages>
        <ImageSlider imagesUrl={car.photos} />
      </CarImages>
      </Animated.View>

      <Animated.ScrollView
      contentContainerStyle= {{
        paddingHorizontal: 24,        
        alignItems: 'center'}
      }
      showsVerticalScrollIndicator={false}
      onScroll={scrollHandler}
      >
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>
          <Rent>
            <Period>{car.rent.period}</Period>
            <Price>R$ {car.rent.price}</Price>
          </Rent>
        </Details>
        <Accessories>
          {
            car.accessories.map(accessory => (
              <Accessory
                key={accessory.type}
                name={accessory.name}
                icon={getAccessoryIcon(accessory.type)}
              />
            ))
          }

        </Accessories>
        <About>{car.about} {car.about} {car.about} {car.about}</About>
      </Animated.ScrollView>
      <Footer>
        <Button title="Escolher Período do aluguel" onPress={handleConfirmRental} />
      </Footer>
    </Container >
  );
}