import styled from "styled-components/native";
import {RectButton} from "react-native-gesture-handler";
import {Feather} from "@expo/vector-icons";

interface CategoryProps {
    title: string
}
export const Wrapper = styled(RectButton).attrs({
    activeOpacity: 0.7,
})`
  background-color: ${({theme}) => theme.colors.shape};
  border-radius: 5px;
  padding: 18px 16px;
  margin: 8px 0;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Category = styled.Text<CategoryProps>`
  color: ${({theme, title}) => title === 'Categoria' ? theme.colors.text.default : theme.colors.text.text_dark};
  font-family: ${({theme}) => theme.fontFamily.regular};
  font-size: ${({theme}) => theme.fontsize.regular}px;

  text-align: left;
`;

export const Icon = styled(Feather)`
  color: ${({theme}) => theme.colors.text.default};
  font-size: ${({theme}) => theme.fontsize.percent}px;
`;



