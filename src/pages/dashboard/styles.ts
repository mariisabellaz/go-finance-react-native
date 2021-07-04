import styled from "styled-components/native";
import {FlatList} from "react-native";
import {Feather} from "@expo/vector-icons";
import {BorderlessButton} from "react-native-gesture-handler";
import {RFPercentage, RFValue} from "react-native-responsive-fontsize";
import {getBottomSpace, getStatusBarHeight} from "react-native-iphone-x-helper";

import {DataListProps} from ".";

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
`;

export const HighlightCards = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: {paddingHorizontal: 24},
})`
  width: 100%;
  position: absolute;
  top: ${RFPercentage(20)}px;
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(42)}px;

  background-color: ${({theme}) => theme.colors.primary};
  align-items: center;
`;

export const UserContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 0 24px;
  margin-top: ${getStatusBarHeight() + RFValue(28)}px;
`;

export const UserInfoWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Photo = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;

  border-radius: 10px;
`;

export const User = styled.View`
  margin-left: 17px;
`;

export const UserGreeting = styled.Text`
  color: ${({theme}) => theme.colors.text.shape};
  font-family: ${({theme}) => theme.fontFamily.regular};
  font-size: ${({theme}) => theme.fontsize.greetings}px;

  text-align: left;
`;

export const UserName = styled.Text`
  color: ${({theme}) => theme.colors.text.shape};
  font-family: ${({theme}) => theme.fontFamily.bold};
  font-size: ${({theme}) => theme.fontsize.greetings}px;

  text-align: left;
`;

export const LogoutButton = styled(BorderlessButton)``;

export const LogoutIcon = styled(Feather).attrs({
    size: RFValue(24),
})`
  color: ${({theme}) => theme.colors.secondary};
`;

export const Transactions = styled.View`
  flex: 1;
  padding: 0 24px;
  margin-top: ${RFPercentage(12)}px;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.text.dark};
  font-family: ${({theme}) => theme.fontFamily.regular};
  font-size: ${({theme}) => theme.fontsize.greetings}px;

  text-align: left;
  margin-bottom: ${RFValue(20)}px;
`;

export const TransactionsList = styled(
    FlatList as new () => FlatList<DataListProps>)
    .attrs({
        showsVerticalScrollIndicator: false,
        contentContainerStyle: {paddingBottom: getBottomSpace()}
    })``;

export const LoadContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
