import styled from "styled-components/native";
import {RFValue, RFPercentage} from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  flex: 2;
  background-color: ${({theme}) => theme.colors.primary};
  
  justify-content: space-evenly;
  align-items: center;
`;

export const TitleWrapper = styled.View`
  align-items: center;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.text.shape};
  font-family: ${({theme}) => theme.fontFamily.medium};
  font-size: ${({theme}) => theme.fontsize.title}px;
  text-align: center;

  margin-top: ${RFValue(40)}px;
`;

export const SingInTitle = styled.Text`
  color: ${({theme}) => theme.colors.text.shape};
  font-family: ${({theme}) => theme.fontFamily.regular};
  font-size: ${({theme}) => theme.fontsize.medium}px;
  text-align: center;
  
  margin-top: ${RFValue(50)}px;
`;

export const Footer = styled.View`
  width: 100%;
  flex: 1;
  background-color: ${({theme}) => theme.colors.secondary};
`;

export const FooterWrapper = styled.View`
  margin-top: ${RFPercentage(-4)}px;
  padding: 0 32px;
  justify-content: space-between;
`;

export const Loading = styled.ActivityIndicator`
  align-items: center;
  justify-content: center;
  align-self: center;
`;
