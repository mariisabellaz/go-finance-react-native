import styled, {css} from "styled-components/native";
import {RFValue} from "react-native-responsive-fontsize";
import {Feather} from "@expo/vector-icons";

interface TypeProps {
    type: 'income' | 'outcome'
}

export const Wrapper = styled.View`
  padding: 17px 24px;
  background-color: ${({theme}) => theme.colors.shape};
  
  margin-bottom: ${RFValue(16)}px;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.text.text_dark};
  font-family: ${({theme}) => theme.fontFamily.regular};
  font-size: ${({theme}) => theme.fontsize.regular}px;

  text-align: left;
`;

export const Amount = styled.Text<TypeProps>`
  font-family: ${({theme}) => theme.fontFamily.regular};
  font-size: ${({theme}) => theme.fontsize.greetings}px;

  text-align: left;
  
  ${({type}) => type === 'income' && css` color: ${({theme}) => theme.colors.text.income};`}
  ${({type}) => type === 'outcome' && css` color: ${({theme}) => theme.colors.text.outcome};`}
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  margin-top: ${RFValue(19)}px;
`;

export const Category = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled(Feather)`
  color: ${({theme}) => theme.colors.icon.light};
  font-size: ${({theme}) => theme.fontsize.medium}px;
`;

export const CategoryName = styled.Text`
  color: ${({theme}) => theme.colors.text.default};
  font-family: ${({theme}) => theme.fontFamily.regular};
  font-size: ${({theme}) => theme.fontsize.regular}px;

  text-align: left;
  margin-left: ${RFValue(17)}px;
`;

export const CategoryDate = styled.Text`
  color: ${({theme}) => theme.colors.text.default};
  font-family: ${({theme}) => theme.fontFamily.regular};
  font-size: ${({theme}) => theme.fontsize.regular}px;

  text-align: right;
`;




