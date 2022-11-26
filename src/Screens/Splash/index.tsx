import React, { useEffect } from 'react';
import BrandSvg from '../../assets/brand.svg';
import LogoSvg from '../../assets/logo.svg';

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,  
  interpolate,
  Extrapolate,
  runOnJS
} from 'react-native-reanimated';

import { Container } from './styles';
import { useNavigation } from '@react-navigation/native';



export function Splash() {
  const splashAnimation = useSharedValue(0);
  const navigation = useNavigation();

  const brandStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(splashAnimation.value, [0, 20, 30], [1, .5, 0]),
      
    }
  });

  const logoStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        splashAnimation.value, [25, 45, 65], [0, .5, 1]),
      
    }
  });

  function startApp(){
    navigation.navigate('Home')
  }

  useEffect(() => {
    splashAnimation.value = withTiming(
      70,
      { duration: 3500 },
      () => {
        'worklet'
        runOnJS(startApp)();
        
      }
      );      
  }, []);

  return (
    <Container>
      <Animated.View style={[brandStyle, {position: 'absolute'}]}>
        <BrandSvg width={80} height={50} />
      </Animated.View>

      <Animated.View style={[logoStyle, {position: 'absolute'}]}>
        <LogoSvg width={180} height={20} />
      </Animated.View>
    </Container>
  );
}

