import styled from "styled-components/native";
import {TextInput} from "react-native";

export const Container = styled(TextInput)`
  text-align: left;
  
  width: 100%;
  padding: 18px 16px;
  
  border-radius: 5px;
  margin-bottom: 8px;
`;


/*
color: ${({theme}) => theme.colors.text.text_dark};
  font-family: ${({theme}) => theme.fontFamily.regular};
  font-size: ${({theme}) => theme.fontsize.regular}px;
    background-color: ${({theme}) => theme.colors.shape};

 */

