import styled from "styled-components/native";
import {RFValue} from "react-native-responsive-fontsize";
import {RectButton} from "react-native-gesture-handler";

export const Wrapper = styled(RectButton)`
  background-color: ${({theme}) => theme.colors.secondary};
  border-radius: 5px;
  
  width: 100%;
  height: ${RFValue(50)}px;
  
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
`;

export const Label = styled.Text`
  color: ${({theme}) => theme.colors.text.shape};
  font-family: ${({theme}) => theme.fontFamily.medium};
  font-size: ${({theme}) => theme.fontsize.regular}px;
  
  text-align: center;
`;




