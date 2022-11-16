import React, { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { StatusBar } from 'react-native';
import Logo from '../../assets/logo.svg';
import { CarDTO } from '../../dtos/CarDTO';
import { Car } from '../../components/Car';
import { Load } from '../../components/Load';
import { useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  Container,
  Header,
  TotalCars,
  HeaderContent,
  CarList
} from './styles';

interface NavigationProps{
  navigate:(
    screen: string,
    carObject:{
      car: CarDTO
    }
  ) => void
}

export function Home() {
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation<NavigationProps>();

  function handleCarDetails(car: CarDTO) {
    navigation.navigate('CarDetails', {car})
  }

  useEffect(() => {
        
    async function fetchCars() {
      try {        
        const response = await api.get('/cars');        
        setCars(response.data);        
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchCars();
  }, [])

  return (
    <Container>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo
            width={RFValue(108)}
            height={RFValue(12)}
          />
          <TotalCars>Total de 12 carros</TotalCars>
        </HeaderContent>
      </Header>
      {loading ? <Load /> :
        <CarList
          data={cars}
          keyExtractor={item => item.id}
          renderItem={({ item }) => 
          <Car data={item} onPress={() => handleCarDetails(item)} />}
        />
      }
    </Container>
  )
}