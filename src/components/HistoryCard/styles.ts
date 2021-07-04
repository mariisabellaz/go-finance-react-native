import styled from "styled-components/native";
import {RFValue} from "react-native-responsive-fontsize";

interface ContainerProps {
    color: string,
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: ${RFValue(48)}px;
  background-color: ${({theme}) =>  theme.colors.shape};
  
  border-radius: 5px;
  border-left-width: 5px;
  border-left-color: ${({color}) =>  color};
  
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  padding: 0 24px;
  margin-bottom: 8px;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.text.text_dark};
  font-family: ${({theme}) => theme.fontFamily.regular};
  font-size: ${({theme}) => theme.fontsize.regular}px;
  
  text-align: left;
`;

export const Amount = styled.Text`
  color: ${({theme}) => theme.colors.text.text_dark};
  font-family: ${({theme}) => theme.fontFamily.bold};
  font-size: ${({theme}) => theme.fontsize.regular}px;
  
  text-align: right;
`;
