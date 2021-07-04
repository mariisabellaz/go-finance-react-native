import React, {useState, useEffect, useCallback} from "react";
import {ActivityIndicator} from "react-native";
import {useFocusEffect} from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useTheme} from "styled-components";
import {
    Wrapper,
    HighlightCards,
    Header,
    UserContainer,
    UserName,
    LogoutButton,
    LogoutIcon,
    UserGreeting,
    UserInfoWrapper,
    User,
    Photo,
    Title,
    Transactions,
    TransactionsList,
    LoadContainer,
} from "./styles";

import {HighlightCard} from "../../components/HighlightCard";
import {EmptyTransaction} from "../../components/EmptyTransaction";
import {TransactionsCard, TransactionsCardProps} from "../../components/TransactionsCard";

import {useAuth} from "../../hooks/auth";

export interface DataListProps extends TransactionsCardProps {
    id: string,
}

interface HighlightProps {
    amount: string,
    lastTransactions: string
}

interface HighlightDataProps {
    entries: HighlightProps,
    expensive: HighlightProps,
    total: HighlightProps
}

export function Dashboard() {
    const [transactions, setTransactions] = useState<DataListProps[]>([]);
    const [highlightData, setHighlightData] = useState<HighlightDataProps>({} as HighlightDataProps);
    const [isLoading, setIsLoading] = useState(true);

    const {user, singOut} = useAuth();
    const theme = useTheme();

    function getLastTransactionsDate(collection: DataListProps[], type: 'income' | 'outcome') {

        const lastTransactions = new Date(
            Math.max.apply(Math, collection
                .filter(transaction => transaction.type === type)
                .map(transaction => new Date(transaction.date).getTime()))
        )

        return `${lastTransactions.getDate()} de ${lastTransactions.toLocaleString('pt-BR', {month: 'long'})}`
    }

    function getIntervalDate(collection: DataListProps[]) {

        const lastTransactions = new Date(
            Math.max.apply(Math, collection
                .map(transaction => new Date(transaction.date).getTime()))
        )

        return `${lastTransactions.getDate()} de ${lastTransactions.toLocaleString('pt-BR', {month: 'long'})}`
    }

    async function loadTransactions() {
        const TRANSACTIONS_KEY = `@finances:transactions_user:${user.id}`

        const response = await AsyncStorage.getItem(TRANSACTIONS_KEY);
        const transactions = response ? JSON.parse(response) : [];

        let entriesTotal = 0;
        let expensiveTotal = 0;

        const transactionsFormatted: DataListProps[] = transactions
            .map((item: DataListProps) => {

                if (item.type === 'income') {
                    entriesTotal += Number(item.amount);
                } else {
                    expensiveTotal += Number(item.amount);
                }

                const amount = Number(item.amount)
                    .toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    });

                const date = Intl.DateTimeFormat('pt-BR', {
                    day: '2-digit',
                    month: '2-digit',
                    year: '2-digit'
                }).format(new Date(item.date))

                return {
                    id: item.id,
                    name: item.name,
                    amount,
                    type: item.type,
                    category: item.category,
                    date
                }
            });

        setTransactions(transactionsFormatted);

        const lastTransactionsEntries = getLastTransactionsDate(transactions, 'income');
        const lastTransactionsExpensive = getLastTransactionsDate(transactions, 'outcome');
        const lastInterval = getIntervalDate(transactions);

        const totalInterval = lastInterval === 'NaN de Invalid Date' ? '' : `01 à ${lastInterval}`
        const sum = entriesTotal - expensiveTotal;

        setHighlightData({
            entries: {
                amount: entriesTotal.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }),
                lastTransactions: lastTransactionsEntries === 'NaN de Invalid Date' ? '' : `Última entradia dia ${lastTransactionsEntries}`
            },
            expensive: {
                amount: expensiveTotal.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }),
                lastTransactions: lastTransactionsExpensive === 'NaN de Invalid Date' ? '' : `Última saída dia ${lastTransactionsExpensive}`
            },
            total: {
                amount: sum.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }),
                lastTransactions: totalInterval
            }
        });
        setIsLoading(false);
    }

    useEffect(() => {
        loadTransactions();
    }, []);

    useFocusEffect(useCallback(() => {
        loadTransactions();
    }, []))

    return (
        <Wrapper>
            {
                isLoading
                    ?
                    <LoadContainer>
                        <ActivityIndicator size="small" color={theme.colors.primary}/>
                    </LoadContainer>
                    :
                    <>
                        <Header>
                            <UserContainer>
                                <UserInfoWrapper>
                                    <Photo source={{uri: user?.photo}}/>
                                    <User>
                                        <UserGreeting>Olá, </UserGreeting>
                                        <UserName>{user?.name}</UserName>
                                    </User>
                                </UserInfoWrapper>

                                <LogoutButton onPress={singOut}>
                                    <LogoutIcon name="power"/>
                                </LogoutButton>
                            </UserContainer>
                        </Header>

                        <HighlightCards>
                            <HighlightCard
                                type="up"
                                amount={highlightData?.entries?.amount}
                                lastTransaction={highlightData.entries.lastTransactions}
                            />
                            <HighlightCard
                                type="down"
                                amount={highlightData?.expensive?.amount}
                                lastTransaction={highlightData.expensive.lastTransactions}
                            />
                            <HighlightCard
                                type="total"
                                amount={highlightData?.total?.amount}
                                lastTransaction={highlightData.total.lastTransactions}
                            />
                        </HighlightCards>

                        <Transactions>
                            <Title>Listagem</Title>

                            <TransactionsList
                                data={transactions}
                                keyExtractor={item => item.id}
                                renderItem={({item}) => <TransactionsCard data={item}/>}
                                ListEmptyComponent={() => <EmptyTransaction/>}
                            />
                        </Transactions>
                    </>
            }
        </Wrapper>
    );
}
