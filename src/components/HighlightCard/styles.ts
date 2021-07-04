import styled from "styled-components/native";
import {RFValue} from "react-native-responsive-fontsize";
import {Feather} from "@expo/vector-icons";

interface TypeProps {
    type: 'up' | 'total' | 'down'
}

export const Container = styled.View<TypeProps>`
  width: ${RFValue(300)}px;
  background-color: ${({theme, type}) => type === 'total' ? theme.colors.secondary : theme.colors.shape};
  
  border-radius: 5px;
  padding: 19px 23px ${RFValue(42)}px;
  margin-right: 16px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text<TypeProps>`
  color: ${({theme, type}) => type === 'total' ? theme.colors.shape : theme.colors.text.text_dark};
  font-family: ${({theme}) => theme.fontFamily.regular};
  font-size: ${({theme}) => theme.fontsize.regular}px;
  
  text-align: left;
`;

export const Icon = styled(Feather)<TypeProps>`
  font-size: ${RFValue(40)}px;
  color: ${({theme, type}) => type === 'up' ? theme.colors.icon.income.default : type === 'down' ? theme.colors.icon.outcome.default : theme.colors.icon.shape};
`;

export const Footer = styled.View``;

export const Amount = styled.Text<TypeProps>`
  color: ${({theme, type}) => type === 'total' ? theme.colors.shape : theme.colors.text.text_dark};
  font-family: ${({theme}) => theme.fontFamily.medium};
  font-size: ${({theme}) => theme.fontsize.title}px;
  
  text-align: left;
  margin-top: 38px;
`;

export const LastTransaction = styled.Text<TypeProps>`
  color: ${({theme, type}) => type === 'total' ? theme.colors.shape : theme.colors.text.text_dark};
  font-family: ${({theme}) => theme.fontFamily.regular};
  font-size: ${({theme}) => theme.fontsize.helper}px;

  text-align: left;
`;
