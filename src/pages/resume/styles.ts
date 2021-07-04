import styled from "styled-components/native";
import {RFValue} from "react-native-responsive-fontsize";
import {BorderlessButton} from "react-native-gesture-handler";
import {Feather} from "@expo/vector-icons";

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
`;

export const Wrapper = styled.ScrollView`
  flex: 1;
`;

export const ChartContainer = styled.View`
  align-items: center;
  justify-content: center;
  
  width: 100%;
`;

export const MonthSelect = styled.View`
  width: 100%;
  flex-direction: row;
  
  justify-content: space-around;
  align-items: center;
  
  margin: 24px 0;
`;

export const MonthSelectButton = styled(BorderlessButton)``;

export const MonthSelectIcon = styled(Feather)`
  color: ${({theme}) => theme.colors.text.dark};
  font-size: ${({theme}) => theme.fontsize.currency}px;

  text-align: left;
`;

export const Month = styled.Text`
  color: ${({theme}) => theme.colors.text.dark};
  font-family: ${({theme}) => theme.fontFamily.regular};
  font-size: ${({theme}) => theme.fontsize.medium}px;

  text-align: center;
`;

export const LoadContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
