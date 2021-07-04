import React from "react";
import {Container, Title, Amount} from "./styles";

export interface HistoryCardProps {
    color: string,
    name: string,
    amount: string,
}

export function HistoryCard({color, name, amount}: HistoryCardProps) {
    return (
        <Container color={color}>
            <Title>{name}</Title>
            <Amount>{amount}</Amount>
        </Container>
    );
}
