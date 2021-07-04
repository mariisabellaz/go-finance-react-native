import React from "react";
import {
    Wrapper,
    Title,
    Amount,
    Footer,
    Category,
    Icon,
    CategoryName,
    CategoryDate,
} from "./styles";
import {categories} from "../../utils/categories";

export interface TransactionsCardProps {
    type: 'income' | 'outcome';
    name: string;
    amount: string;
    category: string;
    date: string;
}

interface Props {
    data: TransactionsCardProps;
}

export function TransactionsCard( { data } : Props) {
    const {
        type,
        name,
        amount,
        category,
        date,
    } = data;

    const [ categoryFilter ] = categories.filter(
        item => item.key === category
    );

    return (
        <Wrapper>
            <Title>{ name }</Title>
            <Amount type={type}>
                { type === 'outcome' && '- ' }
                { amount }
            </Amount>
            <Footer>
                <Category>
                    <Icon name={ categoryFilter.icon }/>
                    <CategoryName>{ categoryFilter.name }</CategoryName>
                </Category>
                <CategoryDate>{ date }</CategoryDate>
            </Footer>
        </Wrapper>
    );
}
