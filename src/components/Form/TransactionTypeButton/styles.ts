import styled, {css} from "styled-components/native";
import {StyleSheet} from "react-native";
import {RectButton} from "react-native-gesture-handler";
import {Feather} from "@expo/vector-icons";

interface IconProps {
    type: 'up' | 'down',
}

interface ButtonProps {
    isActive: boolean,
    type: 'up' | 'down',
}

export const Container = styled.View<ButtonProps>`
  border-radius: 5px;
  border-width: ${({isActive}) => isActive ? 0 : StyleSheet.hairlineWidth}px;
  border-color: ${({theme}) => theme.colors.icon.light};
  
  width: 48%;
  margin: 8px;

  ${({type, isActive}) => isActive && type === 'up' && css` 
    background-color: ${({theme}) => theme.colors.icon.income.background};
  `}
  
  ${({type, isActive}) => isActive && type === 'down' && css` 
    background-color: ${({theme}) => theme.colors.icon.outcome.background};
  `}
`;

export const ButtonWrapper = styled(RectButton)`
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 16px;
`;

export const Label = styled.Text`
  color: ${({theme}) => theme.colors.text.text_dark};
  font-family: ${({theme}) => theme.fontFamily.regular};
  font-size: ${({theme}) => theme.fontsize.regular}px;
  
  text-align: center;
`;

export const Icon = styled(Feather)<IconProps>`
  font-size: ${({theme}) => theme.fontsize.currency}px;
  margin-right: 12px;

  ${({type}) => type === 'up' && css` color: ${({theme}) => theme.colors.icon.income.default};`}
  ${({type}) => type === 'down' && css` color: ${({theme}) => theme.colors.icon.outcome.default};`}
`;
