import { TouchableOpacityProps } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface ButtonProps extends TouchableOpacityProps {
  color: string;
}

export const Container = styled.TouchableOpacity<ButtonProps>`
  width: 100%;
  padding: 19px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, color }) => color ? color : theme.colors.main};
`;
export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.shape};
`;