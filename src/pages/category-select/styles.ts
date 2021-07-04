import styled from "styled-components/native";
import {StyleSheet, FlatList} from "react-native";
import {Feather} from "@expo/vector-icons";
import {GestureHandlerRootView} from "react-native-gesture-handler";

export interface DataListProps {
    key: string;
    name: string;
    icon: string;
    color: string;
}

export interface CategoryProps {
    isActive: boolean
}

export const Wrapper = styled(GestureHandlerRootView)`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
`;

export const Category = styled.TouchableOpacity<CategoryProps>`
  width: 100%;
  padding: 15px;

  flex-direction: row;
  align-items: center;
  
  background-color: ${({isActive, theme}) => isActive ? theme.colors.secondary_light : theme.colors.background};
`;

export const CategoryIcon = styled(Feather)`
  color: ${({theme}) => theme.colors.text.text_dark};
  font-size: ${({theme}) => theme.fontsize.percent}px;

  margin-right: 16px;
`;

export const CategoryName = styled.Text`
  color: ${({theme}) => theme.colors.text.text_dark};
  font-family: ${({theme}) => theme.fontFamily.regular};
  font-size: ${({theme}) => theme.fontsize.regular}px;

  text-align: left;
`;

export const Separator = styled.View`
  width: 90%;
  height: ${StyleSheet.hairlineWidth}px;

  background-color: ${({theme}) => theme.colors.text.default};
  align-self: center;
`;

export const CategoryList = styled(
    FlatList as new () => FlatList<DataListProps>)
    .attrs({
        showsVerticalScrollIndicator: false,
    })`
  flex: 1; 
  width: 100%;
`;

export const Footer = styled.View`
  width: 100%;
  padding: 24px;
`;
