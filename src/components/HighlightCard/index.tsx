import React from "react";
import {
    Container,
    Header,
    Title,
    Icon,
    Footer,
    Amount,
    LastTransaction,
} from "./styles";

interface CardProps {
    type: 'up' | 'total' | 'down'
    amount: string,
    lastTransaction: string,
}

const title = {
    up: 'Entrada',
    down: 'Saida',
    total: 'Total',
}

const icon = {
    up: 'arrow-up-circle',
    down: 'arrow-down-circle',
    total: 'dollar-sign',
}

export function HighlightCard({type, amount, lastTransaction}: CardProps) {
    return (
        <Container type={type}>
            <Header>
                <Title type={type}>{title[type]}</Title>
                <Icon name={icon[type]} type={type}/>
            </Header>

            <Footer>
                <Amount type={type}>{amount}</Amount>
                <LastTransaction type={type}>{lastTransaction}</LastTransaction>
            </Footer>
        </Container>
    );
}
