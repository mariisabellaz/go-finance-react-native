import styled from "styled-components/native";
import {RFValue} from "react-native-responsive-fontsize";

export const Wrapper = styled.View`
  background-color: ${({theme}) => theme.colors.primary};
  width: 100%;
  height: ${RFValue(113)}px;

  padding-bottom: 19px;
  justify-content: flex-end;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.text.shape};
  font-family: ${({theme}) => theme.fontFamily.regular};
  font-size: ${({theme}) => theme.fontsize.greetings}px;

  text-align: center;
`;




