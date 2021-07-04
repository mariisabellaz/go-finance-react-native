import styled from "styled-components/native";
import {RFValue} from "react-native-responsive-fontsize";

export const EmptyContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const EmptyText = styled.Text`
  color: ${({theme}) => theme.colors.text.text_dark};
  font-family: ${({theme}) => theme.fontFamily.italic};
  font-size: ${({theme}) => theme.fontsize.helper}px;

  text-align: center;
`;
