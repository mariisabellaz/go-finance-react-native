import styled from "styled-components/native";

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
`;

export const Fields = styled.View``;

export const Form = styled.View`
  flex: 1;
  padding: 24px;

  justify-content: space-between;
`;

export const TransactionsTypes = styled.View`
  flex-direction: row;
  
  justify-content: space-between;
  align-items: center;
  align-self: center;
`;
