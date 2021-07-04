import React, {useCallback, useState} from "react";
import {ActivityIndicator} from "react-native";
import {VictoryPie} from "victory-native";
import {addMonths, subMonths, format} from "date-fns";
import {ptBR} from "date-fns/locale";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {useFocusEffect} from "@react-navigation/native";
import {useBottomTabBarHeight} from "@react-navigation/bottom-tabs";
import {useTheme} from "styled-components";


import {
    Wrapper,
    Container,
    ChartContainer,
    MonthSelect,
    MonthSelectButton,
    MonthSelectIcon,
    Month,
    LoadContainer
} from "./styles";
import {Header} from "../../components/Header";
import {HistoryCard} from "../../components/HistoryCard";
import {EmptyTransaction} from "../../components/EmptyTransaction";

import {HistoryCardProps} from "../../components/HistoryCard";
import {categories} from "../../utils/categories";

import {useAuth} from "../../hooks/auth";

export interface TransactionsDataProps {
    id: string;
    type: 'income' | 'outcome';
    name: string;
    amount: string;
    category: string;
    date: string;
}

export interface HistoryListProps extends HistoryCardProps {
    key: string;
    total: number;
    percent: string;
}

export function Resume() {
    const theme = useTheme();
    const {user} = useAuth();

    const [isLoading, setIsLoading] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [totalByCategories, setTotalByCategories] = useState<HistoryListProps[]>([]);

    function handleChangeDate(action: 'next' | 'prev') {
        if (action === 'next') {
            setSelectedDate(addMonths(selectedDate, 1));
        } else {
            setSelectedDate(subMonths(selectedDate, 1));
        }
    }

    async function loadData() {
        setIsLoading(true);

        const TRANSACTIONS_KEY = `@finances:transactions_user:${user.id}`

        const response = await AsyncStorage.getItem(TRANSACTIONS_KEY);
        const responseFormatted = response ? JSON.parse(response) : [];

        const expensive = responseFormatted
            .filter((expensive: TransactionsDataProps) =>
                expensive.type === 'outcome' &&
                new Date(expensive.date).getMonth() === selectedDate.getMonth() &&
                new Date(expensive.date).getFullYear() === selectedDate.getFullYear()
            );

        const expensiveTotal = expensive
            .reduce((accumulator: number, expensive: TransactionsDataProps) => {
                return accumulator + Number(expensive.amount);
            }, 0);

        const totalByCategory: HistoryListProps[] = [];

        categories.forEach(category => {
            let categorySum = 0;

            expensive.forEach((expensive: TransactionsDataProps) => {
                if (expensive.category === category.key) {
                    categorySum += Number(expensive.amount);
                }
            });

            if (categorySum > 0) {
                const totalFormatted = categorySum.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                });

                const percent = `${(categorySum / expensiveTotal * 100).toFixed(0)}%`;

                totalByCategory.push({
                    key: category.key,
                    name: category.name,
                    color: category.color,
                    total: categorySum,
                    amount: totalFormatted,
                    percent
                });
            }

        });

        setTotalByCategories(totalByCategory);
        setIsLoading(false);
    }

    useFocusEffect(useCallback(() => {
        loadData();
    }, [selectedDate]))
    return (
        <Container>
            <Header title="Resumo por categoria"/>
            <Wrapper
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: 24,
                    paddingBottom: useBottomTabBarHeight()
                }}>

                <MonthSelect>
                    <MonthSelectButton onPress={() => handleChangeDate('prev')}>
                        <MonthSelectIcon name="chevron-left"/>
                    </MonthSelectButton>

                    <Month>{format(selectedDate, 'MMMM, yyyy', {locale: ptBR})}</Month>

                    <MonthSelectButton onPress={() => handleChangeDate('next')}>
                        <MonthSelectIcon name="chevron-right"/>
                    </MonthSelectButton>
                </MonthSelect>

                {
                    isLoading
                        ?
                        <LoadContainer>
                            <ActivityIndicator size="small" color={theme.colors.primary}/>
                        </LoadContainer>
                        :
                        <>
                            {totalByCategories.length > 0
                                ?
                                <>
                                    <ChartContainer>
                                        <VictoryPie
                                            data={totalByCategories}
                                            colorScale={totalByCategories.map((category) => category.color)}
                                            style={{
                                                labels: {
                                                    fontSize: theme.fontsize.chart,
                                                    fill: theme.colors.text.shape
                                                }
                                            }}
                                            labelRadius={80}
                                            x="percent"
                                            y="total"
                                        />
                                    </ChartContainer>
                                    {totalByCategories.map((item) => (
                                        <HistoryCard
                                            key={item.key}
                                            name={item.name}
                                            color={item.color}
                                            amount={item.amount}
                                        />
                                    ))}
                                </>
                                : <EmptyTransaction/>
                            }
                        </>
                }
            </Wrapper>
        </Container>
    );
}
