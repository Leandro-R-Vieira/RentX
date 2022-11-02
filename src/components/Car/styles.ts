import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 126px;
  padding: 24px;
  margin-bottom: 16px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const Details = styled.View`

`;

export const Brand = styled.Text`
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.text_detail};
  font-family: ${({ theme }) => theme.fonts.secondary_500};
`;

export const Name = styled.Text`
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.secondary_500};
`;

export const About = styled.View`

`;

export const Rent = styled.View`

`;

export const Period = styled.Text`

`;

export const Price = styled.Text`

`;

export const Type = styled.View`

`;

export const CarImage = styled.Image`

`;
