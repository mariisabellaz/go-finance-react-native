import styled from "styled-components/native";
import {TextInput} from "react-native";

export const Container = styled.View`
  width: 100%;
`;

export const Error = styled.Text`
  color: ${({theme}) => theme.colors.text.outcome};
  font-size: ${({theme}) => theme.fontsize.helper}px;
  font-family: ${({theme}) => theme.fontFamily.regular};
  
  text-align: left;
  margin-bottom: 8px;
`;




